import { ReactLenis } from "lenis/react";
import { motion, useScroll } from "framer-motion";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
function HomePage() {
  const { scrollYProgress } = useScroll();
  return (
    <ReactLenis root>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          originX: 0,
          backgroundColor: "#22c55e",
          zIndex: 9999,
        }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default HomePage;
