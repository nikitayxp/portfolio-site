"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/theme/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDark = theme === "dark";

  const iconVariants = prefersReducedMotion
    ? { initial: {}, animate: {}, exit: {} }
    : {
        initial: { rotate: -90, scale: 0, opacity: 0 },
        animate: { rotate: 0, scale: 1, opacity: 1 },
        exit: { rotate: 90, scale: 0, opacity: 0 },
      };

  return (
    <motion.button
      type="button"
      aria-label={isMounted && isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors duration-200 hover:bg-brand-soft"
      whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isMounted && isDark ? (
          <motion.span
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute"
          >
            <Sun size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute"
          >
            <Moon size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
