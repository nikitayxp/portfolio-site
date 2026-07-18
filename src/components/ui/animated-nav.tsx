"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

type NavItem = {
  id: string;
  label: string;
};

type AnimatedNavProps = {
  items: NavItem[];
  className?: string;
};

export function AnimatedNav({ items, className = "" }: AnimatedNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = items.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [items]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <nav className={`flex items-center gap-1 ${className}`}>
      {items.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className="relative px-3 py-1.5 text-sm text-muted transition-colors duration-200 hover:text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {isActive && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute inset-0 rounded-full bg-brand-soft/60 dark:bg-brand-soft/30"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                isActive ? "text-brand dark:text-accent font-medium" : ""
              }`}
            >
              {item.label}
            </span>
          </motion.a>
        );
      })}
    </nav>
  );
}

export function AnimatedNavMobile({ items, className = "" }: AnimatedNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = items.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [items]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <div
      className={`flex gap-2 overflow-x-auto [scrollbar-width:none] ${className}`}
    >
      {items.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`relative shrink-0 rounded-full border px-3 py-1.5 text-xs transition-all duration-200 ${
              isActive
                ? "border-brand bg-brand/10 text-brand dark:text-accent font-medium"
                : "border-border bg-surface text-muted hover:text-foreground hover:border-brand/40"
            }`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {isActive && (
              <motion.span
                layoutId="mobile-nav-indicator"
                className="absolute inset-0 rounded-full border border-brand/40"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </motion.a>
        );
      })}
    </div>
  );
}
