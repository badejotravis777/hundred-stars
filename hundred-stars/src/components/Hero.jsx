import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";
import logo from "../assets/logo.png";
import factory from "../assets/factory.jpg";
import panel1 from "../assets/panel1.jpg";
import panel2 from "../assets/panel2.jpg";

export default function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touchDetected =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(touchDetected);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch) return;
    const { clientX, clientY } = e;
    const x = (window.innerHeight / 2 - clientY) / 25;
    const y = (clientX - window.innerWidth / 2) / 25;
    setRotate({ x, y });
  };

  /* ============================= */
  /* CONTACT ACTIONS */
  /* ============================= */

  const handleWhatsApp = () => {
    const phoneNumber = "+234 707 137 5876"; 
    const message = encodeURIComponent(
      "Hello, I'm interested in your PVC Interior Panels. Please send more details."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    const email = "Hundredstars.pvc@gmail.com";
    const subject = encodeURIComponent("PVC Panel Enquiry");
    const body = encodeURIComponent(
      "Hello,\n\nI would like to request more information about your PVC interior panels.\n\nThank you."
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url(${factory})` }}
      onMouseMove={!isTouch ? handleMouseMove : undefined}
    >
      <div className="hero-dark-overlay" />

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img src={logo} alt="Hundred Stars Logo" className="hero-logo" />

          <div className="manufactured-badge">
            🇳🇬 Industrial Production Facility – Ogun State
          </div>

          <h1>
            Premium PVC Interior Panels
            <span> Manufactured at Industrial Scale</span>
          </h1>

          <p>
            High-performance wall and ceiling panels engineered for durability,
            elegance and structural strength. Waterproof, fire resistant,
            termite free and customizable — produced locally in Nigeria.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleWhatsApp}>
              Chat on WhatsApp
            </button>

            <button className="btn-outline" onClick={handleEmail}>
              Reach Us by Email
            </button>
          </div>
        </motion.div>

        {/* INTERACTIVE PANELS */}
        <div className="floating-panels" aria-hidden={isTouch}>
          <motion.img
            src={panel1}
            className="panel panel-1"
            alt="panel sample 1"
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            draggable={false}
          />

          <motion.img
            src={panel2}
            className="panel panel-2"
            alt="panel sample 2"
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
            }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
