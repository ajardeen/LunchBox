import { IoLocationSharp } from "react-icons/io5";
import TailwindButton from "../../components/TailwindButton";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useLenis } from "lenis/react";
import { BsInstagram } from "react-icons/bs";

const navLinks = [
  { name: "Home", href: "#herosection" },
  { name: "Category", href: "#categorysection" },
  { name: "About us", href: "#aboutussection" },
  { name: "Contact", href: "#footersection" },
];

function FooterSection() {
  const lenis = useLenis();

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    if (lenis && target) {
      const offset =
        target === "#herosection"
          ? -150
          : target === "#footersection"
          ? 200
          : -90;
      lenis.scrollTo(target, { offset, duration: 1.2 });
    } else {
      // fallback
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="footersection" className="flex flex-col font-body w-full">
      {/* ============================
        TOP SECTION (Hero)
      ============================ */}
      <div
        className=" flex flex-col lg:flex-row items-center justify-center bg-gray-50 w-full min-h-[300px] text-white sticky top- z-10"
        style={{
          backgroundImage: "url('/images/footerbg.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-0 flex flex-col lg:flex-row items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left p-4">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-4 leading-tight text-white">
              Ready for Your <br /> Legendary Lunch?
            </h1>
            <p className="text-white text-sm sm:text-base mb-6 max-w-md mx-auto lg:mx-0">
              Be the first to know when we launch in Chennai. Sign up for
              exclusive early-bird offers and get ready to enjoy authentic,
              home-cooked meals delivered right to you.
            </p>
            <div className="flex justify-center lg:justify-start">
              <TailwindButton
                onClick={(e) => handleSmoothScroll(e, "#leadcapturesection")}
              >
                Register now
              </TailwindButton>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:block w-1/2 p-4 relative">
            {/* Reserved for image or extra layout */}
          </div>
        </div>
      </div>

      {/* ============================
        FOOTER SECTION
      ============================ */}
      <footer className="bg-[var(--color-accent)] text-white w-full sticky bottom-0 z-0 min-h-96 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center">
          {/* Logo */}
          <img
            src="/images/LunchBoxLegends.svg"
            alt="LunchBox Legends Logo"
            className="w-48 sm:w-64 md:w-80 h-auto mb-6"
          />

          {/* Navigation Links */}
          <nav className="flex sm:hidden flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Contact & Socials */}
          <div className="flex flex-col md:flex-row  items-start justify-center gap-5 sm:gap-20 text-sm mb-6">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-col items-start justify-center text-left sm:text-left gap-3 sm:gap-3">
              <span className="font-bold">Connect with us:</span>
              <a
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <IoLocationSharp />
                <span>Injambakkanm ECR Chennai</span>
              </a>
              <a
                href="mailto:lunchboxlegends9@gmail.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <MdEmail />
                <span>lunchboxlegends9@gmail.com</span>
              </a>
              <a
                href="tel:+919790455288"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <FaPhone />
                <span>+91 97904 55288</span>
              </a>
            </div>
            {/* Socials */}
            <div className="flex flex-col items-left gap-2">
              <span className="font-bold">Follow us:</span>
              <a
                href="https://www.instagram.com/lunchbox__legends"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity  "
              >
                <BsInstagram />
                <span>@lunchbox__legends</span>
              </a>
            </div>
          </div>
          {/* Copyright */}
          <div className="text-center text-xs sm:text-sm pt-2 border-t border-white border-opacity-30 mt-4 w-full">
            © 2024 LunchBox Legends. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
