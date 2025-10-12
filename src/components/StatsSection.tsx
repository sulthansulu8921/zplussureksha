import React from "react";
import "../styles/StatsSection.css";

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "100%", label: "Customer Satisfaction" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <h3 className="stat-number">{s.number}</h3>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
