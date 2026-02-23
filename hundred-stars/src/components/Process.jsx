import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/process.css";

const steps = [
  {
    title: "Consultation",
    desc: "We assess your project requirements and recommend the best PVC solutions."
  },
  {
    title: "Manufacturing",
    desc: "Panels are produced in-house at our Ogun State factory to exact specifications."
  },
  {
    title: "Delivery",
    desc: "Finished products are carefully packaged and delivered to site."
  },
  {
    title: "Installation Support",
    desc: "Our team provides guidance to ensure clean, durable and professional installation."
  }
];

export default function Process() {
  const [darkMode, setDarkMode] = useState(false);

  // Cursor Glow Tracking
  useEffect(() => {
    const cards = document.querySelectorAll(".process-card");

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
      className={`process ${darkMode ? "dark-luxury" : "light-luxury"}`}
      id="process"
    >
      {/* TOGGLE */}
      <button
        className="lux-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Luxury"}
      </button>

      {/* HEADER */}
      <motion.div
        className="process-header"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>
          Production & Installation <span className="accent">Process</span>
        </h2>

        <div className="lux-divider" />

        <p className="subtitle">
          From factory manufacturing to final interior installation, every step
          follows strict quality control and structured execution standards.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="process-grid">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="process-card"
            initial={{ opacity: 0, scale: 0.97, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -14 }}
          >
            <span className="step-number">
              {(index + 1).toString().padStart(2, "0")}
            </span>

            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
