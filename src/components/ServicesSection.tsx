import React from "react";
import "../styles/ServicesSection.css";

const services = [
  { title: "Custom Door Installation", desc: "Tailored door solutions for your space." },
  { title: "Window Replacement", desc: "Upgrade your home with modern, efficient windows." },
  { title: "Maintenance & Repair", desc: "Keep your products in top condition." },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
