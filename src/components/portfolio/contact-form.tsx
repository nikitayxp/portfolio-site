"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { sendContactEmail, type ActionState } from "@/app/actions/contact";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const initialState: ActionState = {
  success: false,
  message: "",
  error: "",
  fieldErrors: {},
};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <MagneticButton
      as="button"
      type="submit"
      disabled={pending}
      className="group relative inline-flex min-h-[48px] w-full items-center justify-center overflow-hidden rounded-xl bg-brand px-6 text-sm font-semibold text-white transition-all hover:bg-accent hover:shadow-[0_8px_30px_-6px_rgba(37,99,235,0.45)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      strength={0.2}
    >
      {pending ? (
        <Loader2 className="animate-spin" size={18} />
      ) : (
        <span className="flex items-center gap-2">
          {label}
        </span>
      )}
    </MagneticButton>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-md sm:p-8">
      {state.success ? (
        <div className="flex flex-col items-center justify-center space-y-3 py-6 text-center">
          <div className="rounded-full bg-emerald-500/20 p-3 text-emerald-400">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="font-display text-xl text-zinc-100">Message Sent!</h3>
          <p className="text-sm text-zinc-400">
            {state.message || "Thank you. I'll get back to you soon."}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 text-sm font-medium text-brand hover:text-accent"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form ref={formRef} action={formAction} className="space-y-4">
          {state.error && (
            <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-400 border border-red-500/20">
              <AlertCircle size={16} className="shrink-0" />
              <p>{state.error}</p>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-zinc-300">
                Nome / Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={50}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                placeholder="John Doe"
              />
              {state.fieldErrors?.name && (
                <p className="text-xs text-red-400">{state.fieldErrors.name[0]}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-zinc-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={100}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                placeholder="john@example.com"
              />
              {state.fieldErrors?.email && (
                <p className="text-xs text-red-400">{state.fieldErrors.email[0]}</p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-medium text-zinc-300">
              Mensagem / Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              maxLength={500}
              className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              placeholder="How can we help?"
            />
            {state.fieldErrors?.message && (
              <p className="text-xs text-red-400">{state.fieldErrors.message[0]}</p>
            )}
          </div>

          <div className="pt-2">
            <SubmitButton label="Submit Message" />
          </div>
        </form>
      )}
    </div>
  );
}
