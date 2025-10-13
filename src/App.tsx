import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/zplussureksha" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* 🟢 Fixed WhatsApp Button (stays visible on all pages) */}
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
