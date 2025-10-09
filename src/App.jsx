import { useEffect } from "react";
import "./App.css";
import AboutSection from "./sections/AboutSection/AboutSection";
import FooterSections from "./sections/FooterSections";
import HeroSection from "./sections/HeroSection/HeroSection";
import { ReactLenis } from "lenis/react";
import Lenis from "lenis";
import { motion } from "framer-motion";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
      smoothWheel: true,
    });

    // requestAnimationFrame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    // 
    <>
    
      {/* Framer Motion transitions between sections */}
      <ReactLenis root>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <HeroSection />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          >
          <AboutSection />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          >
          <FooterSections />
        </motion.div>
      </motion.div>
    </ReactLenis>
          </>
  );
}

export default App;
