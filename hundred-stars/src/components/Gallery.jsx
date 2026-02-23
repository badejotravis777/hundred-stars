import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/gallery.css";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img5.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";


const galleryItems = [
  {
    label: "Factory Production Line",
    img: img2
 
  },
  {
    label: "Panel Installation Process",
    img: img3
  },
  {
    label: "Interior Wall Finishing",
    img: img4
  },
  {
    label: "Ceiling Panel Installation",
    img: img5
  },
  {
    label: "LED Integrated Designs",
    img: img6
  },
  {
    label: "Completed Interior Projects",
    img: img7
  },
  {
    label: "Completed Interior Projects",
    img: img8
  },
  {
    label: "Completed Interior Projects",
    img: img9
  }
];

export default function Gallery() {
  const [darkMode, setDarkMode] = useState(false);

  // Cursor glow tracking
  useEffect(() => {
    const cards = document.querySelectorAll(".gallery-card");

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
      className={`gallery ${darkMode ? "dark-luxury" : "light-luxury"}`}
      id="gallery"
    >
      {/* Toggle */}
      <button
        className="lux-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Luxury"}
      </button>

      {/* Header */}
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>
          Factory & Project <span className="accent">Gallery</span>
        </h2>

        <div className="lux-divider" />

        <p>
          Real manufacturing, real installations and completed interior projects —
          demonstrating production quality and installation precision.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            initial={{ opacity: 0, scale: 0.97, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
            viewport={{ once: true }}
          >
            <img src={item.img} alt={item.label} />

            <div className="gallery-overlay">
              <span>{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
