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
    <section className="bg-white relative text-foreground min-h-screen flex flex-col items-center justify-center text-center px-6 transition-colors duration-500">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #bbf7d0, transparent),
        radial-gradient(circle 600px at 100% 200px, #bbf7d0, transparent)
      `,
        }}
      />
      <div className="absolute z-10 top-1 ">
        <img sr c="/images/hero_pan_img.webp" className=" h-96" />
      </div>

      {/* Your Content Here */}

      {/* <button
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
      </button> */}
    </section>
  );
}

export default HeroSection;
