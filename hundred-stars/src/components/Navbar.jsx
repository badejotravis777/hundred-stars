import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">

        {/* LOGO */}
        <div className="nav-logo" onClick={() => scrollToSection("hero")}>
          <img src={logo} alt="Hundred Stars Logo" />
        </div>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("products")}>Products</li>
          <li onClick={() => scrollToSection("advantages")}>Why Us</li>
          <li onClick={() => scrollToSection("process")}>Process</li>
          <li onClick={() => scrollToSection("gallery")}>Projects</li>
        </ul>

        {/* DESKTOP CTA */}
        <button
          className="nav-cta"
          onClick={() => scrollToSection("contact")}
        >
          Get a Quote
        </button>

        {/* MOBILE HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
  <ul>
    <li onClick={() => scrollToSection("about")}>About</li>
    <li onClick={() => scrollToSection("products")}>Products</li>
    <li onClick={() => scrollToSection("advantages")}>Why Us</li>
    <li onClick={() => scrollToSection("process")}>Process</li>
    <li onClick={() => scrollToSection("gallery")}>Projects</li>
    <li onClick={() => scrollToSection("contact")} className="mobile-cta">
      Get a Quote
    </li>
  </ul>
</div>

    </motion.nav>
  );
}
