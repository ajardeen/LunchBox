import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function HeroSection() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Apply the theme class to <html>
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save user preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center text-center px-6 transition-colors duration-500">
      <h1 className="text-5xl md:text-6xl font-heading text-primary mb-4">
        FROM OUR KITCHEN TO YOUR TABLE
      </h1>

      <p className="text-lg md:text-xl text-foreground/80 font-body mb-8 max-w-2xl">
        Delicious meals crafted with love, now available in light and dark mode.
      </p>

      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-6 py-3 bg-primary text-white hover:bg-secondary transition-all shadow-md"
      >
        {theme === "dark" ? (
          <>
            <FaSun /> Light Mode
          </>
        ) : (
          <>
            <FaMoon /> Dark Mode
          </>
        )}
      </button>
    </section>
  );
}

export default HeroSection;
