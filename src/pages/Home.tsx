import React from "react";
import HeroSection from "../components/Mainpage";
import FeaturesSection from "../components/FeaturesSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";


const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <StatsSection />
      <CTASection />
      <FAQSection />
    </>
  );
};

export default Home;
