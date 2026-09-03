"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";
let themeTransitionTimer: number | undefined;

const getSystemTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const applyTheme = (theme: Theme, animate = false) => {
  const isDark = theme === "dark";

  if (animate) {
    if (themeTransitionTimer) window.clearTimeout(themeTransitionTimer);
    document.documentElement.classList.add("theme-changing");
    themeTransitionTimer = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-changing");
    }, 250);
  }

  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = theme;
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const savedValue = localStorage.getItem("theme");
    const savedTheme: Theme | null =
      savedValue === "light" || savedValue === "dark" ? savedValue : null;
    const initialTheme = savedTheme ?? getSystemTheme();

    applyTheme(initialTheme);
    setTheme(initialTheme);

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;

      const systemTheme = event.matches ? "dark" : "light";
      applyTheme(systemTheme, true);
      setTheme(systemTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-surface text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}
