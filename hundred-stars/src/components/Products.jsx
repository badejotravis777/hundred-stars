import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "../styles/products.css";

import wall from "../assets/panel1.jpg";
import ceiling from "../assets/panel2.jpg";
import accessories from "../assets/panel1.jpg";
import installation from "../assets/panel2.jpg";

const products = [
  {
    title: "PVC Interior Wall Panels",
    desc: "Standard size 1220mm x 2400mm. Multiple colours, textures and finishes. Custom sizes available.",
    image: wall
  },
  {
    title: "PVC Ceiling Panels",
    desc: "Designed for residential and commercial ceilings. Fully compatible with LED lighting systems.",
    image: ceiling
  },
  {
    title: "Accessories",
    desc: "Board connectors, corner strips, L-edge profiles and finishing systems.",
    image: accessories
  },
  {
    title: "Installation Materials",
    desc: "Industrial gum, nails, LED strip lights and drivers for complete installation solutions.",
    image: installation
  }
];

export default function Products() {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section
      className="products"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* CURSOR LIGHT */}
      <div
        className="cursor-light"
        style={{
          left: mouse.x,
          top: mouse.y
        }}
      />

      <div className="products-header">
        <span className="section-tag">OUR PRODUCTS</span>

        <h2>
          Industrial PVC Systems
          <span> Engineered for Performance</span>
        </h2>

        <div className="metal-divider"></div>

        <p className="subtitle">
          Chinese-backed production technology combined with Nigerian
          manufacturing capacity delivering durability, precision and scale.
        </p>
      </div>

      {/* SLIDER */}
      <div className="products-slider">
        {products.map((product, index) => (
          <TiltCard key={index} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

/* 3D TILT CARD */
function TiltCard({ product, index }) {
  const cardRef = useRef(null);

  const handleMove = e => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 12;
    const rotateY = (x / rect.width - 0.5) * -12;

    cardRef.current.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  };

  const reset = () => {
    cardRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      ref={cardRef}
      className="product-card"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <div
        className="product-image"
        style={{ backgroundImage: `url(${product.image})` }}
      />

      <div className="product-sweep" />

      <div className="product-content">
        <h3>{product.title}</h3>
        <p>{product.desc}</p>
        <span className="product-tag">Factory Produced</span>
      </div>
    </motion.div>
  );
}
