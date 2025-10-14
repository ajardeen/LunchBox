import { IoLocationSharp } from "react-icons/io5";
import TailwindButton from "../../components/TailwindButton";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function FooterSection() {
  return (
    <div className="flex flex-col font-body w-full">
      {/* ============================
        TOP SECTION (Hero)
      ============================ */}
      <div
        className=" flex flex-col lg:flex-row items-center justify-center bg-gray-50 w-full min-h-[300px] text-white sticky top- z-10"
        style={{
          backgroundImage: "url('/images/footerbg.png')",
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
            <h1 className="text-2xl sm:text-3xl font-heading font-bold mb-4 leading-snug text-white">
              CUSTOMIZE DELIVERY MEAL <br /> FOR A HEALTHY LIFESTYLE
            </h1>
            <p className="text-white text-sm sm:text-base mb-6 max-w-md mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center lg:justify-start">
              <TailwindButton>GET 50% OFF TODAY</TailwindButton>
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
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium mb-6">
            <a href="#" className="hover:opacity-80 transition-opacity">
              About Us
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Category
            </a>
            <a
              href="#"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              Food & Drink
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Resources
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Gallery
            </a>
          </nav>
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 sm:gap-8 text-sm mb-6">
            <div className="flex items-center gap-2">
              <IoLocationSharp />
              <span>123 Healthy Street, Food City, India</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone />
              <span>contact@lunchboxlegends.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              <span>+91 98765 43210</span>
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
