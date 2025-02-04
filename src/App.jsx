import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FutureSection from "./components/FutureSection";
import WhySection from "./components/WhySection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FutureSection />
      <WhySection />
      <Footer />
    </div>
  );
};

export default App;
