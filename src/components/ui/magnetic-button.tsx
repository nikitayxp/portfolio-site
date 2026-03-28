"use client";

import { useRef, useState, useCallback } from "react";
import type { ReactNode, MouseEvent, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  strength?: number;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function MagneticButton({
  children,
  className = "",
  as = "button",
  href,
  target,
  rel,
  onClick,
  strength = 0.35,
  type,
  disabled,
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (prefersReducedMotion || !ref.current) return;

      const bounds = ref.current.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const deltaX = (event.clientX - centerX) * strength;
      const deltaY = (event.clientY - centerY) * strength;

      x.set(deltaX);
      y.set(deltaY);
    },
    [prefersReducedMotion, strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }, [x, y]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const MotionTag = as === "a" ? motion.a : motion.button;

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLAnchorElement & HTMLButtonElement>}
      className={className}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      type={type}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        x: prefersReducedMotion ? 0 : springX,
        y: prefersReducedMotion ? 0 : springY,
      }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
      animate={
        prefersReducedMotion
          ? {}
          : {
              scale: isHovered ? 1.04 : 1,
            }
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </MotionTag>
  );
}
