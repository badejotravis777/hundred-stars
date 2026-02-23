import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/advantages.css";

const advantages = [
  "Waterproof & Moisture Resistant",
  "Fire Resistant",
  "Sound Proof",
  "Scratch Resistant",
  "Termite Free",
  "Antiseptic & Hygienic",
  "Easy & Fast Installation",
  "Direct Wall Mounting",
  "Customizable Sizes",
  "Manufactured to Global Standards"
];

export default function Advantages() {
  const [darkMode, setDarkMode] = useState(false);

  // Cursor Glow Tracking
  useEffect(() => {
    const cards = document.querySelectorAll(".advantage-card");

    cards.forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
      });
    });
  }, []);

  return (
    <section
      className={`advantages ${darkMode ? "dark-luxury" : "light-luxury"}`}
      id="advantages"
    >
      {/* FACTORY PARALLAX */}
      <div className="factory-parallax" />

      {/* THEME TOGGLE */}
      <button
        className="lux-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Luxury"}
      </button>

      {/* HEADER */}
      <motion.div
        className="advantages-header"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>
          Why Choose <span className="accent">Hundred Stars</span>
        </h2>

        <div className="lux-divider" />

        <p>
          Manufactured using advanced production technology and strict factory
          quality control from our Chinese manufacturing partners — delivering
          durability, hygiene and long-term performance.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="advantages-grid">
        {advantages.map((item, index) => (
          <motion.div
            key={index}
            className="advantage-card"
            initial={{ opacity: 0, scale: 0.97, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <span className="check">✓</span>
            <p>{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
