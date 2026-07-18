"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { MouseGlowCard } from "@/components/ui/mouse-glow-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedText } from "@/components/ui/animated-text";
import { SectionReveal, RevealItem } from "@/components/ui/section-reveal";
import { ParallaxOrbs } from "@/components/ui/parallax-orbs";
import { AnimatedNav, AnimatedNavMobile } from "@/components/ui/animated-nav";
import { profileContent } from "@/content/profile";
import type { AppLocale } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useRef } from "react";

type PortfolioPageProps = {
  locale: AppLocale;
};

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const fadeSlideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_EXPO, delay },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_EXPO, delay },
  },
});

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const content = profileContent[locale];
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(heroScrollProgress, [0, 1], [0, 60]);
  const photoScale = useTransform(heroScrollProgress, [0, 0.5], [1, 0.96]);

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

  const navItems = [
    { id: "about", label: labels.navAbout },
    { id: "skills", label: labels.navSkills },
    { id: "projects", label: labels.navProjects },
    { id: "experience", label: labels.navExperience },
    { id: "contact", label: labels.navContact },
  ];

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
    <div
      className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground"
      lang={locale}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_12%,rgba(37,99,235,0.16),transparent_40%),radial-gradient(circle_at_92%_10%,rgba(8,145,178,0.14),transparent_34%),linear-gradient(to_bottom,var(--background),color-mix(in_oklab,var(--background)_84%,white_16%))] dark:bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.22),transparent_44%),radial-gradient(circle_at_88%_8%,rgba(34,211,238,0.16),transparent_36%),linear-gradient(to_bottom,#0f172a,#0b1325)]" />

      <ParallaxOrbs />

      <motion.header
        className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur"
        initial={prefersReducedMotion ? false : { y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.05 }}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6 md:px-10">
          <Link href={`/${locale}`} className="shrink-0 font-display text-xl tracking-tight" data-cursor-hover>
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.15 }}
              className="inline-block"
            >
              Nikita
            </motion.span>
          </Link>

          <div className="ml-3 hidden flex-1 lg:flex">
            <AnimatedNav items={navItems} />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <motion.div
              className="flex items-center gap-1 rounded-full border border-border bg-surface px-1.5 py-1 text-[11px] font-semibold text-muted sm:text-xs"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE_EXPO, delay: 0.3 }}
            >
              <span className="hidden px-1 sm:inline">{labels.langSwitch}</span>
              <Link
                href="/pt"
                data-cursor-hover
                className={`rounded-full px-2.5 py-1 transition-all duration-200 hover:scale-105 ${
                  locale === "pt" ? "bg-brand text-white shadow-[0_2px_8px_rgba(37,99,235,0.35)]" : "hover:bg-brand-soft"
                }`}
              >
                PT
              </Link>
              <Link
                href="/en"
                data-cursor-hover
                className={`rounded-full px-2.5 py-1 transition-all duration-200 hover:scale-105 ${
                  locale === "en" ? "bg-brand text-white shadow-[0_2px_8px_rgba(37,99,235,0.35)]" : "hover:bg-brand-soft"
                }`}
              >
                EN
              </Link>
            </motion.div>
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      <motion.div
        className="sticky top-[68px] z-10 border-b border-border/60 bg-background/90 backdrop-blur lg:hidden"
        initial={prefersReducedMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.15 }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-2 sm:px-6 md:px-10">
          <AnimatedNavMobile items={navItems} />
        </div>
      </motion.div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 pt-8 sm:px-6 md:px-10 md:pt-10">
        <motion.section
          ref={heroRef}
          className="rounded-3xl border border-border bg-surface/95 px-6 py-10 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] sm:px-10 sm:py-14"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-center">
            <div>
              <motion.p
                className="font-mono text-xs uppercase tracking-[0.16em] text-muted"
                variants={fadeIn(0.1)}
                initial="hidden"
                animate="visible"
              >
                {labels.heroKicker}
              </motion.p>
              <AnimatedText
                text={content.name}
                as="h1"
                className="mt-5 max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
                delay={0.2}
                stagger={0.06}
              />
              <motion.p
                className="mt-4 text-lg text-muted"
                variants={fadeSlideUp(0.5)}
                initial="hidden"
                animate="visible"
              >
                {content.title}
              </motion.p>
              <motion.p
                className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg"
                variants={fadeSlideUp(0.6)}
                initial="hidden"
                animate="visible"
              >
                {content.summary}
              </motion.p>
              <motion.div
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"
                variants={fadeSlideUp(0.7)}
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  animate={prefersReducedMotion ? {} : { rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles size={14} />
                </motion.span>
                {labels.impactTag}
              </motion.div>
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                variants={fadeSlideUp(0.85)}
                initial="hidden"
                animate="visible"
              >
                <MagneticButton
                  as="a"
                  href="#projects"
                  className="inline-flex min-h-11 items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent hover:shadow-[0_8px_30px_-6px_rgba(37,99,235,0.45)]"
                  strength={0.3}
                >
                  {content.ctaPrimary}
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#contact"
                  className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-brand-soft"
                  strength={0.3}
                >
                  {content.ctaSecondary}
                </MagneticButton>
              </motion.div>
              <motion.p
                className="mt-7 text-sm text-muted"
                variants={fadeIn(1.0)}
                initial="hidden"
                animate="visible"
              >
                {content.location} · {content.email} · {content.phone}
              </motion.p>
            </div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE_EXPO }}
              style={
                prefersReducedMotion
                  ? {}
                  : {
                      y: photoY,
                      scale: photoScale,
                    }
              }
              className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px]"
            >
              <motion.div
                className="absolute -inset-2 rounded-[2rem] bg-gradient-to-b from-brand/35 to-accent/25 blur-xl"
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        opacity: [0.6, 1, 0.6],
                        scale: [0.98, 1.02, 0.98],
                      }
                }
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface p-2">
                <Image
                  src="/profile.jpg"
                  alt="Foto de perfil de Nikita Slobodeniuc"
                  width={420}
                  height={520}
                  priority
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
        <SectionReveal
          as="section"
          id="about"
          className="scroll-mt-32 rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          <AnimatedText
            text={labels.navAbout}
            as="h2"
            className="font-display text-3xl sm:text-4xl"
            stagger={0.05}
          />
          <motion.p
            className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base"
            variants={fadeSlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.summary}
          </motion.p>
        </SectionReveal>
        <SectionReveal
          as="section"
          id="skills"
          className="scroll-mt-32 space-y-6"
          staggerChildren={0.08}
        >
          <AnimatedText
            text={content.sections.skills}
            as="h2"
            className="font-display text-3xl sm:text-4xl"
            stagger={0.05}
          />
          <motion.div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.15 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skillGroups.map((group) => (
              <RevealItem key={group.label}>
                <MouseGlowCard
                  className="rounded-2xl border border-border bg-surface p-5 transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_rgba(37,99,235,0.2)]"
                  hoverY={-5}
                  tiltStrength={6}
                >
                  <h3 className="font-semibold text-foreground">{group.label}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </MouseGlowCard>
              </RevealItem>
            ))}
          </motion.div>
        </SectionReveal>
        <SectionReveal
          as="section"
          id="projects"
          className="scroll-mt-32 space-y-6"
        >
          <AnimatedText
            text={content.sections.projects}
            as="h2"
            className="font-display text-3xl sm:text-4xl"
            stagger={0.05}
          />
          <motion.div
            className="grid gap-5 md:grid-cols-2"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.15 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {content.projects.map((project) => (
              <RevealItem key={project.name}>
                <MouseGlowCard
                  className="rounded-2xl border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.2)]"
                  hoverY={-5}
                  tiltStrength={8}
                >
                  <h3 className="font-display text-2xl">{project.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                    {project.stack.join(" · ")}
                  </p>
                  <MagneticButton
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-accent"
                    strength={0.25}
                  >
                    {labels.openProject}
                    <motion.span
                      className="inline-block"
                      animate={prefersReducedMotion ? {} : { x: [0, 3, 0], y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ArrowUpRight size={14} />
                    </motion.span>
                  </MagneticButton>
                </MouseGlowCard>
              </RevealItem>
            ))}
          </motion.div>
        </SectionReveal>
        <SectionReveal
          as="section"
          id="experience"
          className="scroll-mt-32 space-y-6"
        >
          <AnimatedText
            text={content.sections.experience}
            as="h2"
            className="font-display text-3xl sm:text-4xl"
            stagger={0.05}
          />
          <motion.div
            className="relative space-y-5"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand/40 via-accent/30 to-transparent md:block"
              variants={{
                hidden: { scaleY: 0 },
                visible: {
                  scaleY: 1,
                  transition: { duration: 1.2, ease: EASE_EXPO, delay: 0.3 },
                },
              }}
              style={{ transformOrigin: "top" }}
            />
            {content.experience.map((item) => (
              <RevealItem key={`${item.company}-${item.period}`}>
                <MouseGlowCard
                  className="rounded-2xl border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_rgba(37,99,235,0.15)]"
                  hoverY={-3}
                  tiltStrength={5}
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
              </RevealItem>
            ))}
          </motion.div>
        </SectionReveal>
        <SectionReveal
          as="section"
          id="education"
          className="scroll-mt-32 space-y-6"
        >
          <AnimatedText
            text={content.sections.education}
            as="h2"
            className="font-display text-3xl sm:text-4xl"
            stagger={0.05}
          />
          <motion.div
            className="rounded-2xl border border-border bg-surface p-6"
            variants={fadeSlideUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ul className="space-y-3 text-sm leading-7 text-muted">
              {content.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted">
              {content.languagesSpoken.join(" · ")}
            </p>
          </motion.div>
        </SectionReveal>
        <SectionReveal
          as="section"
          id="contact"
          className="scroll-mt-32 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 px-6 py-10 text-zinc-100 sm:px-10"
        >
          <AnimatedText
            text={content.sections.contact}
            as="h2"
            className="font-display text-3xl sm:text-4xl"
            stagger={0.05}
          />
          <motion.p
            className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base"
            variants={fadeSlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {labels.availability}
          </motion.p>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_280px]">
            <motion.div
              variants={fadeSlideUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-sm text-muted">Contact form coming soon.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.4 },
                },
              }}
              className="flex flex-col gap-3"
            >
              <RevealItem>
                <MagneticButton
                  as="a"
                  href={content.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/50 px-5 py-3 font-semibold text-zinc-200 transition-colors hover:bg-zinc-800"
                  strength={0.2}
                >
                  LinkedIn
                </MagneticButton>
              </RevealItem>
              <RevealItem>
                <MagneticButton
                  as="a"
                  href={content.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/50 px-5 py-3 font-semibold text-zinc-200 transition-colors hover:bg-zinc-800"
                  strength={0.2}
                >
                  GitHub
                </MagneticButton>
              </RevealItem>
              <RevealItem>
                <MagneticButton
                  as="a"
                  href={content.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/50 px-5 py-3 font-semibold text-zinc-200 transition-colors hover:bg-zinc-800"
                  strength={0.2}
                >
                  {labels.downloadResume}
                </MagneticButton>
              </RevealItem>
            </motion.div>
          </div>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </SectionReveal>
      </main>
    </div>
  );
}
