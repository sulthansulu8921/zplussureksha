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
      <button onClick={openWhatsApp}>Contact Us</button>
    </section>
  );
};

export default CTASection;
