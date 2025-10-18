import React from "react";
import "../styles/ServicesSection.css";

const services = [
  { title: "Customise Designing " },
  { title: "Home Renovation Projects" },
  { title: "Innovative Products" },
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
              {/* <p>{service.desc}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
