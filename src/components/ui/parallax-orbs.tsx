"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function ParallaxOrbs() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 0.95]);

  if (prefersReducedMotion) {
    return (
      <>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-[36rem] -z-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-1/4 top-[60rem] -z-10 h-48 w-48 rounded-full bg-brand/10 blur-3xl"
        />
      </>
    );
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
        style={{ y: y1, x: x1, rotate: rotate1, scale: scale1 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-[36rem] -z-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
        style={{ y: y2, x: x2, rotate: rotate2 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-[60rem] -z-10 h-48 w-48 rounded-full bg-brand/10 blur-3xl"
        style={{ y: y3 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[90rem] -z-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
        style={{ y: y1, x: x1 }}
      />
    </>
  );
}
