import React, { useState } from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Your WhatsApp number in international format (no + or spaces)
    const phoneNumber = "919946229098"; // example: India +91

    // ✅ Pre-fill message with user's input
    const text = `Hello, I'm ${form.name}.\nEmail: ${form.email}\nMessage: ${form.message}`;
    const encodedText = encodeURIComponent(text);

    // ✅ WhatsApp Web / App URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // ✅ Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form (optional)
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="contact-input"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="contact-input"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={4}
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">
          Send Message on WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Contact;
