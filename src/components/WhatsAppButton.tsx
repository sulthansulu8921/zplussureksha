import React from "react";
import { motion } from "framer-motion";
import "../styles/WhatsAppButton.css";

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "919497376797";
  const message = "Hello! I'm interested in your doors and windows.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <img
        src="/image/whatsapp_img.png"
        alt="WhatsApp"
        className="whatsapp-icon-img"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
