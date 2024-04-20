import "./style/style.css";
import React, { useEffect } from "react";
import Navbar from "./components/Header";
import { Hero } from "./components/Hero";
import { About1 } from "./components/About1";
import { About2 } from "./components/About2";
import { Services } from "./components/Servies";
import { Team } from "./components/Team";
import FAQSection from "./components/FAQ";
import SliderTestimonials from "./components/testimonialsMain";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { Float } from "./components/Float";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About1 />
      <About2 />
      <Services />
      <Team />
      <FAQSection />
      <SliderTestimonials />
      <CTA />
      <Footer />
      <Float />
    </>
  );
}

export default App;
