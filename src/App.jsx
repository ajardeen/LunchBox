import { useEffect } from "react";
import "@radix-ui/themes/styles.css";
import "./App.css";
import AboutSection from "./sections/AboutSection/AboutSection";
import FooterSections from "./sections/FooterSection/FooterSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import { ReactLenis } from "lenis/react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { Theme } from "@radix-ui/themes";
import Layouts from "./layouts/Layouts";
import ServiceSection from "./sections/ServiceSection/ServiceSection";

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
        <Theme>
          <Layouts>
            <motion.div>
              <HeroSection />
              <motion.div>
                <AboutSection />
              </motion.div>
              <motion.div>
                <ServiceSection />
              </motion.div>
              <motion.div>
                <FooterSections />
              </motion.div>
            </motion.div>
          </Layouts>
        </Theme>
      </ReactLenis>
    </>
  );
}

export default App;
