import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/applications.css";

const applications = [
  {
    title: "Residential Spaces",
    items: [
      "Sitting Rooms",
      "Bedrooms",
      "TV Consoles",
      "Ceilings",
      "Bathrooms",
      "Interior Doors"
    ]
  },
  {
    title: "Commercial Spaces",
    items: [
      "Offices",
      "Hotels",
      "Lounges",
      "Retail Spaces",
      "Showrooms"
    ]
  },
  {
    title: "Functional Applications",
    items: [
      "Interior Wall Finishing",
      "POP Replacement",
      "Feature Walls",
      "LED Integrated Designs"
    ]
  }
];

export default function Applications() {
  const [darkMode, setDarkMode] = useState(false);

  // Cursor Glow Tracking
  useEffect(() => {
    const cards = document.querySelectorAll(".application-card");

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
      className={`applications ${darkMode ? "dark-luxury" : "light-luxury"}`}
      id="applications"
    >
      {/* THEME TOGGLE */}
      <button
        className="lux-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Luxury"}
      </button>

      {/* HEADER */}
      <motion.div
        className="applications-header"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>
          Product <span className="accent">Applications</span>
        </h2>

        <div className="lux-divider" />

        <p>
          Engineered for flexibility across residential, commercial and
          specialized interior environments requiring durability and clean
          finishing.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="applications-grid">
        {applications.map((app, index) => (
          <motion.div
            className="application-card"
            key={index}
            initial={{ opacity: 0, scale: 0.97, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
          >
            <h3>{app.title}</h3>

            <ul>
              {app.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
