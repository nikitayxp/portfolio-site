"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Nome inválido").max(50, "O nome é muito longo"),
  email: z.string().email("Email inválido").max(100, "O email é muito longo"),
  message: z.string().min(3, "A mensagem deve ter pelo menos 3 letras").max(500, "A mensagem é muito longa"),
});

// Rate limit simples em memória (reinicia em cold starts)
type RateLimitData = {
  count: number;
  resetTime: number;
};
const rateLimits = new Map<string, RateLimitData>();

const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 60 * 1000;

export type ActionState = {
  success?: boolean;
  message?: string;
  error?: string;
  fieldErrors?: Record<string, string[]>;
  payload?: { name: string; email: string; message: string };
};

export async function sendContactEmail(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "unknown";
  
  const now = Date.now();
  const userData = rateLimits.get(ip);

  if (userData && now < userData.resetTime) {
    if (userData.count >= MAX_REQUESTS) {
      return {
        error: "Muitos pedidos. Tente novamente mais tarde.",
      };
    }
    userData.count++;
  } else {
    rateLimits.set(ip, { count: 1, resetTime: now + WINDOW_MS });
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      error: "Dados do formulário inválidos.",
      fieldErrors: parsed.error.flatten().fieldErrors,
      payload: {
        name: formData.get("name") as string || "",
        email: formData.get("email") as string || "",
        message: formData.get("message") as string || "",
      }
    };
  }

  const { name, email, message } = parsed.data;

  try {
    const sanitizedMsg = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nikitayxp@gmail.com",
      subject: `Nova Mensagem do Portfólio de ${name}`,
      replyTo: email,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${sanitizedMsg}`,
    });

    if (error) {
      return {
        error: "Falha ao enviar a mensagem. Tente novamente.",
        payload: { name, email, message },
      };
    }

    return {
      success: true,
      message: "Mensagem enviada com sucesso!",
    };
  } catch {
    return {
      error: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
      payload: { name, email, message },
    };
  }
}
