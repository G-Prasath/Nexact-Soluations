import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import PrivacyPolicy from "./PrivacyPolicy";

gsap.registerPlugin(ScrollTrigger);

// Your existing portfolio page
function Portfolio() {
  const { isDark, toggle } = useTheme();
  const pageRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={pageRef} className={isDark ? "dark" : "light"}>
      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Custom cursor */}
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home / Portfolio */}
        <Route path="/" element={<Portfolio />} />

        {/* Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      </Routes>
    </BrowserRouter>
  );
}
