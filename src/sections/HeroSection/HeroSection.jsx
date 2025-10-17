import { useLenis } from "lenis/react";
import TailwindButton from "../../components/TailwindButton";

function HeroSection() {
  const lenis = useLenis();

  const scrollToLeadCapture = () => {
    // Use the id of the LeadCaptureSection
    lenis?.scrollTo("#leadcapturesection", { offset: 0, duration: 1.5 });
  };

  return (
    <>
      <section id="herosection" className="relative h-fit max-h-3xl flex items-center justify-center bg-white px-4 sm:px-4 md:px-5 pt-0">
        <div className="relative w-full max-w-8xl border-1 border-green-800 border-b-green-400 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-start bg-white">
          {/* Background Gradient */}
          <div
            className="absolute inset-0 z-0 opacity-100"
            style={{
              backgroundImage: `
                radial-gradient(circle 600px at 0% 400px, rgba(187, 247, 208, 0.6), transparent),
                radial-gradient(circle 600px at 100% 400px, rgba(187, 247, 208, 0.6), transparent)
              `,
            }}
          ></div>

          {/* Left: Text Section */}
          <div className="relative z-10 flex-1 w-full md:w-[55%] text-center md:text-left p-6 sm:p-10 space-y-6 md:-mr-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-6xl font-extrabold font-runde text-gray-900 leading-tight">
              Fuel Your <br /> Chennai Grind
              <br className="block" /> with Legendary Lunch.
            </h1>
            <p className="text-gray-700 text-base sm:text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
              <span className="text-xl font-bold text-primary">
                சுவை! & ஆரோக்கியம்!
              </span>{" "}
              Stop stressing about lunch. Lunchbox Legends brings you
              subscription-based lunchboxes, freshly prepared with that
              authentic, home-cooked flavor. Perfect for IT Professionals,
              Hostel Residents, and Seniors in Chennai. It's the real
              deal—convenient and delicious.
            </p>

            <TailwindButton onClick={scrollToLeadCapture}>
              Register Now
            </TailwindButton>
          </div>

          {/* Right: Image Section */}
          <div className="absolute right-0 z-0 flex-1 w-full md:w-[60%] flex justify-center items-center opacity-10 md:opacity-100">
            <img
              src="/images/hero_pan_img.webp"
              alt="Healthy Meal"
              className="w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover opacity-90 rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
