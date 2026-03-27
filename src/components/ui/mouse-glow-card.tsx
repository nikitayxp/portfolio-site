"use client";

import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MouseGlowCardProps = {
  className: string;
  children: ReactNode;
  hoverY?: number;
};

export function MouseGlowCard({ className, children, hoverY = -4 }: MouseGlowCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!glowRef.current) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    glowRef.current.style.opacity = "1";
    glowRef.current.style.background = `radial-gradient(220px circle at ${x}px ${y}px, color-mix(in oklab, var(--brand) 28%, transparent), transparent 65%)`;
  };

  const handleMouseLeave = () => {
    if (!glowRef.current) {
      return;
    }

    glowRef.current.style.opacity = "0";
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={prefersReducedMotion ? {} : { y: hoverY }}
      className={`group relative overflow-hidden ${className}`}
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
      />
      <div className="relative">{children}</div>
    </motion.article>
  );
}
