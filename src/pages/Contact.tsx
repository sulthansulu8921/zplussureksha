import React, { useState } from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    pincode: "",
    address: "",
    requirement: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919497376797"; // ✅ Your WhatsApp number (India format)

    // ✅ Combine all user data into one message
    const text = `Hello, I'm ${form.name}.
Email: ${form.email}
Mobile: ${form.mobile}
Pincode: ${form.pincode}
Address: ${form.address}
Requirement: ${form.requirement}
Message: ${form.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappURL, "_blank");

    // ✅ Reset form
    setForm({
      name: "",
      email: "",
      mobile: "",
      pincode: "",
      address: "",
      requirement: "",
      message: "",
    });
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
        <input
          name="mobile"
          type="tel"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Your Mobile Number"
          required
          className="contact-input"
        />
        <input
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          placeholder="Your Pincode"
          required
          className="contact-input"
        />
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Your Address"
          required
          className="contact-input"
        />
        <input
          name="requirement"
          value={form.requirement}
          onChange={handleChange}
          placeholder="Your Requirement (e.g. Product or Service)"
          required
          className="contact-input"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Additional Message"
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
