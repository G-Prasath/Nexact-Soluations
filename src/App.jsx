import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useTheme } from "./hooks/useTheme";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { isDark, toggle } = useTheme();
  const pageRef = useRef(null);

  useEffect(() => {
    // Page-level smooth scroll setup for GSAP ScrollTrigger
    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div ref={pageRef} className={isDark ? "dark" : "light"}>
      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Custom cursor (desktop only) */}
      <Cursor />

      {/* Navigation */}
      <Navbar isDark={isDark} onToggle={toggle} />

      {/* Main content */}
      <main>
        <Hero isDark={isDark} />
        <About />
        {/* <Projects /> */}
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
