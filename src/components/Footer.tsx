import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="./image/Z+ LOGO.png" alt="logo" />
          <h5>
            Delivering High Quality 
          </h5>
          <h5> Doors Frame and Windows</h5>
          <h5>Manufacturing | installation </h5>
          <h5>Art & Painting | Delivery</h5>
        </div>

        <div className="footer-column">
          <h1>Quick Links</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            {/* <li>
              <a href="/products">Products</a>
            </li> */}
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h1>Contact Us</h1>
          <h4>Sales:<span><a href="tel:9497376797">+91 9497376797</a></span> </h4>
          
          <h4> Customer Care:<span><a href="tel:9447516191">+91 9447516191</a></span></h4>
            
          <h4>Email:<p> zplussureksha@gmail.com</p></h4>
          
          <h4>Office Address: <p>
           9/47 Nellukuthupara Nallepilly Road Panayur PO Chittur Palakkad Kerala South india 678552
          </p></h4>
           
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zplus All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
