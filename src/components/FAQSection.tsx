import React from "react";
import "../styles/FAQSection.css";

const faqs = [
  { q: "Do you offer custom designs?", a: "Yes, we provide fully customized designs to suit your needs." },
  { q: "How long does installation take?", a: "Most installations are completed within 1–3 days." },
  { q: "Do you provide warranties?", a: "Yes, all our products come with a warranty." },
];

const FAQSection: React.FC = () => {
  return (
    <section className="faq">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
