"use client";

import { useRef, useState, useCallback } from "react";
import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type MouseGlowCardProps = {
  className: string;
  children: ReactNode;
  hoverY?: number;
  tiltStrength?: number;
  hoverScale?: number;
};

export function MouseGlowCard({
  className,
  children,
  hoverY = -4,
  tiltStrength = 8,
  hoverScale = 1.03,
}: MouseGlowCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;

      // Glow effect
      if (glowRef.current) {
        glowRef.current.style.opacity = "1";
        glowRef.current.style.background = `radial-gradient(280px circle at ${x}px ${y}px, color-mix(in oklab, var(--brand) 20%, transparent), transparent 60%)`;
      }

      // 3D tilt
      if (!prefersReducedMotion) {
        const tiltX = ((y - centerY) / centerY) * -tiltStrength;
        const tiltY = ((x - centerX) / centerX) * tiltStrength;
        rotateX.set(tiltX);
        rotateY.set(tiltY);
      }
    },
    [prefersReducedMotion, tiltStrength, rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }, [rotateX, rotateY]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      data-cursor-hover
      animate={
        prefersReducedMotion
          ? {}
          : {
              y: isHovered ? hoverY : 0,
              scale: isHovered ? hoverScale : 1,
            }
      }
      style={
        prefersReducedMotion
          ? {}
          : {
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformPerspective: 800,
              transformStyle: "preserve-3d" as const,
            }
      }
      transition={{
        y: { type: "spring", stiffness: 300, damping: 25 },
        scale: { type: "spring", stiffness: 300, damping: 25 },
      }}
      className={`group relative overflow-hidden ${className}`}
    >
      {/* Glow overlay */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
      />
      {/* Shine edge highlight on hover */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.04) 100%)",
        }}
      />
      <div className="relative" style={{ transformStyle: "preserve-3d" as const }}>
        {children}
      </div>
    </motion.article>
  );
}
