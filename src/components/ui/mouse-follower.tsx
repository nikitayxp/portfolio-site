"use client";

import { useEffect, useCallback, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export function MouseFollower() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    document.body.classList.add("cursor-ready");

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    const handleOverInteractive = () => setIsHovering(true);
    const handleOutInteractive = () => setIsHovering(false);

    const observer = new MutationObserver(() => attachListeners());

    function attachListeners() {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleOverInteractive);
        el.removeEventListener("mouseleave", handleOutInteractive);
        el.addEventListener("mouseenter", handleOverInteractive);
        el.addEventListener("mouseleave", handleOutInteractive);
      });
    }

    attachListeners();
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove("cursor-ready");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [
    prefersReducedMotion,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleMouseEnter,
  ]);

  if (prefersReducedMotion) return null;

  const size = isHovering ? 48 : 20;
  const dotSize = isHovering ? 0 : 4;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: size,
          height: size,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 25 },
          height: { type: "spring", stiffness: 300, damping: 25 },
          opacity: { duration: 0.15 },
          scale: { type: "spring", stiffness: 500, damping: 20 },
        }}
      >
        <div
          className="absolute rounded-full border border-white/80"
          style={{
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: dotSize,
          height: dotSize,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{
          width: { type: "spring", stiffness: 400, damping: 25 },
          height: { type: "spring", stiffness: 400, damping: 25 },
          opacity: { duration: 0.15 },
        }}
      >
        <div
          className="absolute rounded-full bg-white"
          style={{
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>
    </>
  );
}
