"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { MouseGlowCard } from "@/components/ui/mouse-glow-card";
import { profileContent } from "@/content/profile";
import type { AppLocale } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme/theme-toggle";

type PortfolioPageProps = {
  locale: AppLocale;
};

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const content = profileContent[locale];
  const prefersReducedMotion = useReducedMotion();

  const sectionVariant = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.12,
        staggerChildren: 0.1,
      },
    },
  };

  const labels = {
    pt: {
      navAbout: "Sobre",
      navSkills: "Competencias",
      navProjects: "Projetos",
      navExperience: "Experiencia",
      navContact: "Contacto",
      heroKicker: "Junior IT Technician · Full-Stack Track",
      openProject: "Abrir projeto",
      downloadResume: "Download CV",
      impactTag: "A construir software pratico com impacto real.",
      availability:
        "Disponivel para oportunidades em desenvolvimento full-stack, suporte tecnico e colaboracoes freelance.",
      langSwitch: "Idioma",
    },
    en: {
      navAbout: "About",
      navSkills: "Skills",
      navProjects: "Projects",
      navExperience: "Experience",
      navContact: "Contact",
      heroKicker: "Junior IT Technician · Full-Stack Track",
      openProject: "Open project",
      downloadResume: "Download Resume",
      impactTag: "Building practical software with measurable outcomes.",
      availability:
        "Available for full-stack opportunities, technical support roles and freelance collaborations.",
      langSwitch: "Language",
    },
  }[locale];

  const skillGroups = [
    {
      label: locale === "pt" ? "Hardware e Suporte" : "Hardware and Support",
      items: content.skills.supportAndHardware,
    },
    { label: locale === "pt" ? "Linguagens" : "Languages", items: content.skills.languages },
    { label: locale === "pt" ? "Web e Cloud" : "Web and Cloud", items: content.skills.webAndCloud },
    { label: locale === "pt" ? "Ferramentas" : "Tools", items: content.skills.tools },
    { label: "Design", items: content.skills.design },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground" lang={locale}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_12%,rgba(37,99,235,0.16),transparent_40%),radial-gradient(circle_at_92%_10%,rgba(8,145,178,0.14),transparent_34%),linear-gradient(to_bottom,var(--background),color-mix(in oklab,var(--background) 84%,white 16%))] dark:bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.22),transparent_44%),radial-gradient(circle_at_88%_8%,rgba(34,211,238,0.16),transparent_36%),linear-gradient(to_bottom,#0f172a,#0b1325)]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 -z-10 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
        animate={prefersReducedMotion ? {} : { y: [0, 20, 0], x: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-[36rem] -z-10 h-60 w-60 rounded-full bg-accent/20 blur-3xl"
        animate={prefersReducedMotion ? {} : { y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6 md:px-10">
          <Link href={`/${locale}`} className="shrink-0 font-display text-xl tracking-tight">
            Nikita
          </Link>
          <nav className="ml-3 hidden flex-1 items-center gap-6 text-sm text-muted lg:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              {labels.navAbout}
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground">
              {labels.navSkills}
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground">
              {labels.navProjects}
            </a>
            <a href="#experience" className="transition-colors hover:text-foreground">
              {labels.navExperience}
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              {labels.navContact}
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full border border-border bg-surface px-1.5 py-1 text-[11px] font-semibold text-muted sm:text-xs">
              <span className="hidden px-1 sm:inline">{labels.langSwitch}</span>
              <Link
                href="/pt"
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  locale === "pt" ? "bg-brand text-white" : "hover:bg-brand-soft"
                }`}
              >
                PT
              </Link>
              <Link
                href="/en"
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  locale === "en" ? "bg-brand text-white" : "hover:bg-brand-soft"
                }`}
              >
                EN
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="sticky top-[68px] z-10 border-b border-border/60 bg-background/90 backdrop-blur lg:hidden">
        <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 py-2 text-xs [scrollbar-width:none] sm:px-6 md:px-10">
          <a href="#about" className="shrink-0 rounded-full border border-border bg-surface px-3 py-1.5 text-muted hover:text-foreground">
            {labels.navAbout}
          </a>
          <a href="#skills" className="shrink-0 rounded-full border border-border bg-surface px-3 py-1.5 text-muted hover:text-foreground">
            {labels.navSkills}
          </a>
          <a href="#projects" className="shrink-0 rounded-full border border-border bg-surface px-3 py-1.5 text-muted hover:text-foreground">
            {labels.navProjects}
          </a>
          <a href="#experience" className="shrink-0 rounded-full border border-border bg-surface px-3 py-1.5 text-muted hover:text-foreground">
            {labels.navExperience}
          </a>
          <a href="#contact" className="shrink-0 rounded-full border border-border bg-surface px-3 py-1.5 text-muted hover:text-foreground">
            {labels.navContact}
          </a>
        </div>
      </div>

      <motion.main
        className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 pt-8 sm:px-6 md:px-10 md:pt-10"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          variants={sectionVariant}
          className="rounded-3xl border border-border bg-surface/95 px-6 py-10 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] sm:px-10 sm:py-14"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:items-center">
            <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{labels.heroKicker}</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {content.name}
          </h1>
          <p className="mt-4 text-lg text-muted">{content.title}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">{content.summary}</p>
              <div className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                <Sparkles size={14} />
                {labels.impactTag}
              </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
            >
              {content.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-brand-soft"
            >
              {content.ctaSecondary}
            </a>
          </div>
          <p className="mt-7 text-sm text-muted">
            {content.location} · {content.email} · {content.phone}
          </p>
            </div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9, y: 18 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative mx-auto w-full max-w-[220px]"
            >
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-b from-brand/35 to-accent/25 blur-xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-2">
                <Image
                  src="/perfil.jpg"
                  alt="Foto de perfil de Nikita Slobodeniuc"
                  width={420}
                  height={520}
                  priority
                  className="h-auto w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={sectionVariant} id="about" className="scroll-mt-32 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="font-display text-3xl sm:text-4xl">{labels.navAbout}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
            {content.summary}
          </p>
        </motion.section>

        <motion.section variants={sectionVariant} id="skills" className="scroll-mt-32 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl">{content.sections.skills}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <MouseGlowCard
                key={group.label}
                className="rounded-2xl border border-border bg-surface p-5 transition-transform duration-200 hover:-translate-y-0.5"
                hoverY={-4}
              >
                <h3 className="font-semibold text-foreground">{group.label}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </MouseGlowCard>
            ))}
          </div>
        </motion.section>

        <motion.section variants={sectionVariant} id="projects" className="scroll-mt-32 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl">{content.sections.projects}</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {content.projects.map((project) => (
              <MouseGlowCard
                key={project.name}
                className="rounded-2xl border border-border bg-surface p-6 transition-transform duration-300 ease-out hover:scale-[1.01]"
                hoverY={-5}
              >
                <h3 className="font-display text-2xl">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                  {project.stack.join(" · ")}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-accent"
                >
                  {labels.openProject}
                  <ArrowUpRight size={14} />
                </a>
              </MouseGlowCard>
            ))}
          </div>
        </motion.section>

        <motion.section variants={sectionVariant} id="experience" className="scroll-mt-32 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl">{content.sections.experience}</h2>
          <div className="space-y-5">
            {content.experience.map((item) => (
              <MouseGlowCard
                key={`${item.company}-${item.period}`}
                className="rounded-2xl border border-border bg-surface p-6"
                hoverY={-3}
              >
                <p className="font-semibold text-foreground">{item.role}</p>
                <p className="mt-1 text-sm text-muted">
                  {item.company} · {item.period}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </MouseGlowCard>
            ))}
          </div>
        </motion.section>

        <motion.section variants={sectionVariant} id="education" className="scroll-mt-32 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl">{content.sections.education}</h2>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <ul className="space-y-3 text-sm leading-7 text-muted">
              {content.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted">
              {content.languagesSpoken.join(" · ")}
            </p>
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariant}
          id="contact"
          className="scroll-mt-32 rounded-3xl border border-zinc-800 bg-zinc-950 px-6 py-10 text-zinc-100 sm:px-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl">{content.sections.contact}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">{labels.availability}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${content.email}`}
              className="inline-flex min-h-11 items-center rounded-full bg-brand px-5 py-3 font-semibold text-white hover:bg-accent"
            >
              Email
            </a>
            <a
              href={content.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-zinc-600 px-5 py-3 font-semibold text-zinc-100 transition-colors hover:bg-zinc-800"
            >
              LinkedIn
            </a>
            <a
              href={content.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-zinc-600 px-5 py-3 font-semibold text-zinc-100 transition-colors hover:bg-zinc-800"
            >
              GitHub
            </a>
            <a
              href={content.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-zinc-600 px-5 py-3 font-semibold text-zinc-100 transition-colors hover:bg-zinc-800"
            >
              {labels.downloadResume}
            </a>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
}
