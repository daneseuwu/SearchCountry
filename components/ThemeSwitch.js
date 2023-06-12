"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <section>
      <span className="cursor-pointer text-primary text-2xl">
        {currentTheme === "dark" ? (
          <RiSunFill onClick={() => setTheme("light")} />
        ) : (
          <RiMoonClearFill onClick={() => setTheme("dark")} />
        )}
      </span>
    </section>
  );
};

export default ThemeSwitch;
