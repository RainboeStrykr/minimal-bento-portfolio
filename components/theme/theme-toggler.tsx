"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeToggler() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      size="icon"
      className="rounded-full !border-none bg-transparent relative overflow-hidden"
    >
      <div className="relative w-[1.2rem] h-[1.2rem]">
        <SunIcon
          className={
            "absolute inset-0 w-full h-full transition-all duration-300 ease-out " +
            (isDark
              ? "scale-0 -rotate-90 opacity-0 text-white"
              : "scale-100 rotate-0 opacity-100 text-white")
          }
          aria-hidden={isDark}
        />
        <MoonIcon
          className={
            "absolute inset-0 w-full h-full transition-all duration-300 ease-out " +
            (isDark
              ? "scale-100 rotate-0 opacity-100 text-black"
              : "scale-0 rotate-90 opacity-0 text-black")
          }
          aria-hidden={!isDark}
        />
      </div>
    </Button>
  );
}
