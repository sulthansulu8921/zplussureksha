import React from "react";
import "../styles/CTASection.css";

const CTASection: React.FC = () => {

 
  const whatsappNumber = "91919497376797";
  const message = "Hello! I'm interested in your doors and windows.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="cta">
      <h2>Ready to Upgrade Your Home?</h2>
      <p>Get a free quote today and experience the quality difference.</p>
      <button onClick={openWhatsApp}>Contact Us</button>
    </section>
  );
};

export default CTASection;
