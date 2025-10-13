import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="./image/Z+ LOGO.png" alt="logo" />
          <p>
            Delivering high-quality doors and windows for modern homes with
            trust and excellence.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
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
          <h4>Contact</h4>
          <p>
            📍 Registered Office Address :<br/> 9/47 Nellukuthupara , Nallepilly Road
            , Panayur PO ,Chittur Palakkd 678552
          </p>
          <h4> For enquiry</h4>
          <p>📞 +919497376797 </p>
          <h4> Customer service</h4>
          <p>📞 +919447516191</p>
          <p>✉️ zplussureksha@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
