import React from "react";
import "../styles/Mainpage.css";

const Mainpage: React.FC = () => {
  // Replace with your WhatsApp number (with country code, no '+' or spaces)
  const whatsappNumber = "919497376797";
  const message = "Hello! I'm interested in your doors and windows.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="main">
      <div className="main-container">
        <div className="main-left">
          <img
            src="./image/carus.png"
            alt="Zplus Logo"
            className="main-logo"
          />
        </div>
      </div>

      <div className="main-cta">
        <h1>Building Trust Through Quality</h1>
        <p>High-quality doors and windows for modern homes.</p>
        <button onClick={openWhatsApp}>Get a Free Quote</button>
      </div>
      <div className="contact-info">
        <p>📞 +91 919497376797 </p>
        <p>✉️ zplussureksha@gmail.com</p>
        <p>📍9/47 Nellukuthupara , Nallepilly Road
            , Panayur PO ,Chittur Palakkd 678552</p>
      </div>
    </section>
  );
};

export default Mainpage;
