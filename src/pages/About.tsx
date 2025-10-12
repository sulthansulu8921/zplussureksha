import React from "react";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
        We are a trusted company with years of experience in designing and installing
        high-quality doors and windows. Our mission is to bring durability, beauty,
        and energy efficiency to every home.
      </p>
    </div>
  );
};

export default About;
