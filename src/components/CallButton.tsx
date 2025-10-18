import React from "react";
import { motion } from "framer-motion";
import "../styles/CallButton.css";

const CallButton: React.FC = () => {
  const phoneNumber = "919497376797"; 
  const callUrl = `tel:${phoneNumber}`;

  return (
    <motion.a
      href={callUrl}
      className="call-button"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/image/call_icon.png`}
        alt="Call"
        className="call-icon-img"
      />
    </motion.a>
  );
};

export default CallButton;
