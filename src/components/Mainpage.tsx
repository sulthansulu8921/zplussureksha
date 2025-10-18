import React from "react";
import "../styles/Mainpage.css";
import { Carousel } from "react-bootstrap";
;

const Mainpage: React.FC = () => {
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
          <Carousel fade interval={3000} pause="hover">
            <Carousel.Item>
              <img
                src={`${process.env.PUBLIC_URL}/image/carus.png`}
                alt="Carousel"
                className="d-block w-100 main-logo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={`${process.env.PUBLIC_URL}/image/carus1.png`}
                alt="Carousel"
                className="d-block w-100 main-logo"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>



      <div className="main-cta">
        <h4>Build Trust Through Quality</h4>
        <h1>Doors | Frames | Windows </h1>
        <button onClick={openWhatsApp}>Product Enquiry</button>
      </div>

      <div className="contact-info">
        <p>📞 +91 919497376797</p>
        <p>✉️ zplussureksha@gmail.com</p>
        <p>
          9/47 Nellukuthupara  Nallepilly Road Panayur PO Chittur Palakkad
          678552
        </p>
      </div>
    </section>
  );
};

export default Mainpage;
