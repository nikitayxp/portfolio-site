"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Invalid name").max(50, "Name is too long"),
  email: z.string().email("Invalid email").max(100, "Email is too long"),
  message: z.string().min(10, "Message is too short").max(500, "Message is too long"),
});

// Basic in-memory rate limiter (Warning: State is reset on serverless function cold starts,
// but it's sufficient for basic spam protection on a static portfolio).
type RateLimitData = {
  count: number;
  resetTime: number;
};
const rateLimits = new Map<string, RateLimitData>();

const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export type ActionState = {
  success?: boolean;
  message?: string;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function sendContactEmail(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // 1. Rate Limiting Check
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "unknown";
  
  const now = Date.now();
  const userData = rateLimits.get(ip);

  if (userData && now < userData.resetTime) {
    if (userData.count >= MAX_REQUESTS) {
      return {
        error: "Too many requests. Please try again later.",
      };
    }
    userData.count++;
  } else {
    rateLimits.set(ip, { count: 1, resetTime: now + WINDOW_MS });
  }

  // 2. Validate Input
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      error: "Invalid form data.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = parsed.data;

  // 3. Send email using Resend
  try {
    const sanitizedMsg = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nikitayxp@gmail.com",
      subject: `Nova Mensagem do Portfólio de ${name}`,
      replyTo: email, // Validated user email
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${sanitizedMsg}`,
    });

    if (error) {
      console.error("[Resend API Error]:", error);
      return {
        error: "Failed to send message via provider. Please try again.",
      };
    }

    console.log(`[Email Sent Successfully to nikitayxp@gmail.com. Data ID: ${data?.id}]`);

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (err) {
    console.error("[Server Action Error]:", err);
    return {
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
