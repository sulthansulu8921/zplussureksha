import React from "react";
import "../styles/FeaturesSection.css";

const features = [
  { title: "100 % Water proof",  },
  { title: " Environmental Friendly ", },
  { title: "Low Maintenance", },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">Why Choose Us</h2>
        <div className="features-grid">
          {features.map((f, index) => (
            <div key={index} className="feature-card">
              <h3>{f.title}</h3>
              {/* <p>{f.desc}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
