"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

import { MagneticButton } from "@/components/ui/magnetic-button";
import type { AppLocale } from "@/lib/i18n";

type ContactActionsProps = {
  email: string;
  locale: AppLocale;
};

const labels = {
  pt: {
    emailLabel: "Email",
    send: "Enviar email",
    copy: "Copiar email",
    copied: "Email copiado",
  },
  en: {
    emailLabel: "Email",
    send: "Send email",
    copy: "Copy email",
    copied: "Email copied",
  },
};

export function ContactActions({ email, locale }: ContactActionsProps) {
  const [copied, setCopied] = useState(false);
  const content = labels[locale];

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-md sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
        {content.emailLabel}
      </p>
      <a
        href={`mailto:${email}`}
        className="mt-3 inline-block break-all font-display text-xl text-zinc-100 transition-colors hover:text-brand sm:text-2xl"
      >
        {email}
      </a>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <MagneticButton
          as="a"
          href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 text-sm font-semibold text-white transition-all hover:bg-accent hover:shadow-[0_8px_30px_-6px_rgba(37,99,235,0.45)]"
          strength={0.2}
        >
          <Mail size={18} aria-hidden="true" />
          {content.send}
        </MagneticButton>
        <MagneticButton
          as="button"
          type="button"
          onClick={copyEmail}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950/40 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800"
          strength={0.2}
        >
          {copied ? (
            <Check size={18} aria-hidden="true" />
          ) : (
            <Copy size={18} aria-hidden="true" />
          )}
          {copied ? content.copied : content.copy}
        </MagneticButton>
      </div>
      <p className="sr-only" aria-live="polite">
        {copied ? content.copied : ""}
      </p>
    </div>
  );
}
