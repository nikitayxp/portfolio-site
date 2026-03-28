"use client";

import { type ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.04,
    },
  }),
};

export function AnimatedText({
  text,
  as: Tag = "p",
  className = "",
  delay = 0,
  stagger = 0.04,
  once = true,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion.create(Tag as keyof HTMLElementTagNameMap);

  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <MotionTag className={className}>{text}</MotionTag>;
  }

  return (
    <MotionTag
      className={`${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          custom={i * (stagger / 0.04) + delay / 0.04}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: (customI: number) => ({
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as const,
                delay: customI * 0.04,
              },
            }),
          }}
          className="inline-block"
          aria-hidden="true"
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </MotionTag>
  );
}
