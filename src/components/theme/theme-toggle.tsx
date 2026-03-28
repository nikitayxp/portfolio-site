"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isMounted && isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors duration-200 hover:bg-brand-soft"
    >
      {isMounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
