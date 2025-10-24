import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import { BsInstagram } from "react-icons/bs";

const navLinks = [
  { name: "Home", href: "#herosection" },
  { name: "Category", href: "#categorysection" },
  { name: "About us", href: "#aboutussection" },
  { name: "Contact", href: "#footersection" },
];

function TopNav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // ✅ Lenis Smooth Scroll
    if (lenis && target) {
      const offset =
        target === "#herosection"
          ? -150
          : target === "#footersection"
          ? 200
          : isMobile
          ? 0
          : -90;
      lenis.scrollTo(target, { offset, duration: 1.2 });
    } else {
      // fallback normal scroll
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mb-10 flex items-center justify-between px-6 md:px-12 h-[70px] lg:h-[80px] w-full  sticky bg-white lg:bg-white/50 lg:backdrop-blur-xl top-0 left-0 z-50">
      {/* Logo */}
      <a
        href="#herosection"
        onClick={(e) => handleSmoothScroll(e, "#herosection")}
        className="flex items-center text-xl font-bold text-green-700"
      >
        <img
          src="./images/LunchBoxLegends.svg"
          alt="logo"
          className="w-25 lg:w-36"
        />
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8 text-[var(--color-foreground)]">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className="text-base font-medium transition hover:text-[var(--color-accent)] cursor-pointer"
          >
            {link.name}
          </a>
        ))}
        <div className="flex flex-col items-left gap-2">
          {/* <span className="font-bold">Follow us:</span> */}
          <a
            href="https://www.instagram.com/lunchbox__legends"
            target="_blank"
            rel="noopener noreferrer"
            className="flex border text-sm p-1 px-2 rounded-full hover:bg-pink-50 items-center gap-2 hover:opacity-80 transition-opacity text-pink-800"
          >
            <BsInstagram />
            <span className="">@lunchbox__legends</span>
          </a>
        </div>
        <button
          onClick={(e) => handleSmoothScroll(e, "#leadcapturesection")}
          className=" bg-[var(--color-accent)] text-[var(--color-background)] px-5 py-2 rounded-full font-medium hover:brightness-110 transition"
        >
          Register Now
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 hover:text-[var(--color-accent)]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <Cross1Icon className="w-6 h-6" />
        ) : (
          <HamburgerMenuIcon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className=" absolute top-full left-0 w-full bg-[var(--color-background)] shadow-lg flex flex-col md:hidden p-5 space-y-4 z-50 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-[var(--color-foreground)] font-medium py-2 rounded hover:bg-green-50 hover:text-[var(--color-accent)]"
              >
                {link.name}
              </a>
            ))}
             <div className="flex  items-left gap-5 mb-5">
          <span className="font-bold">Follow us:</span>
          <a
            href="https://www.instagram.com/lunchbox__legends"
            target="_blank"
            rel="noopener noreferrer"
            className="flex border text-sm p-1 px-2 w-fit rounded-full hover:bg-pink-50 items-center gap-2 hover:opacity-80 transition-opacity text-pink-800"
          >
            <BsInstagram />
            <span className="">@lunchbox__legends</span>
          </a>
        </div>
            <button
              onClick={(e) => handleSmoothScroll(e, "#leadcapturesection")}
              className="w-full bg-[var(--color-accent)] text-[var(--color-background)] px-5 py-2 rounded-full font-medium hover:brightness-110 transition"
            >
              Register Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default TopNav;
