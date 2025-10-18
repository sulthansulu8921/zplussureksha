import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/image/Z+ LOGO.png`} alt="logo" /></div>
          <p>Doors | Frames | Windows </p> 
          <p className="content">We are delivering High Quality Products
          Manufacturing | Art & Painting | Installation</p>
        </div>

        <div className="footer-column">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/Reviews">Reviews</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Contact Us</h2>
          <h4>
            Sales:
            <span>
              <a href="tel:9497376797">+91 9497376797</a>
            </span>{" "}
          </h4>

          <h4>
            {" "}
            Customer Care:
            <span>
              <a href="tel:9447516191">+91 9447516191</a>
            </span>
          </h4>

          <h4>
            Email:{" "}
            <a href="mailto:zplussureksha@gmail.com">zplussureksha@gmail.com</a>
          </h4>

          <h4>
            Office Address:{" "}
            <p>
              9/47 Nellukuthupara Nallepilly Road Panayur PO Chittur Palakkad
              Kerala South india 678552
            </p>
          </h4>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zplus All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
