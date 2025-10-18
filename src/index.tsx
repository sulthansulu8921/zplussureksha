import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./styles/Navbar.css";
import "./styles/Mainpage.css";
import "./styles/FeaturesSection.css";
import "./styles/ServicesSection.css";
import "./styles/StatsSection.css";
import "./styles/CTASection.css";
import "./styles/FAQSection.css";
import "./styles/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
