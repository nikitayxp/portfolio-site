"use client";

import type { ReactNode, ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  staggerChildren?: number;
  once?: boolean;
  amount?: number;
  id?: string;
};

const directionMap = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
};

export function SectionReveal({
  children,
  className = "",
  as = "div",
  delay = 0,
  direction = "up",
  distance = 40,
  staggerChildren = 0,
  once = true,
  amount = 0.15,
  id,
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion.create(as as keyof HTMLElementTagNameMap);

  const dir = directionMap[direction];

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : dir.x * distance,
      y: prefersReducedMotion ? 0 : dir.y * distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
        delay,
        ...(staggerChildren > 0 && {
          staggerChildren,
          delayChildren: delay + 0.1,
        }),
      },
    },
  };

  return (
    <MotionTag
      id={id}
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion.create(as as keyof HTMLElementTagNameMap);

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 24,
          scale: prefersReducedMotion ? 1 : 0.97,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
