import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../styles/about.css";
import factory from "../assets/factory.jpg";

/* ---------------- COUNTER COMPONENT ---------------- */

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              clearInterval(timer);
              setCount(target);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <h4 ref={ref}>
      {count}
      {suffix}
    </h4>
  );
};

export default function About() {
  const cardRef = useRef(null);

  /* -------- PARALLAX EFFECT -------- */
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const offset = window.pageYOffset;
      cardRef.current.style.backgroundPositionY = offset * 0.15 + "px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT SIDE */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">WHO WE ARE</span>

          <h2>
            Precision Manufacturing.
            <span> Industrial Strength. Global Backing.</span>
          </h2>

          <div className="metal-divider"></div>

          <p>
            Hundred Stars Plastic Industries Ltd is a Chinese-backed
            manufacturing company operating in Nigeria, with a fully equipped
            industrial production facility located in Ogere Remo, Ogun State.
          </p>

          <p>
            We specialize in the production of high-quality PVC interior wall
            and ceiling panels, alongside complete finishing accessories —
            all manufactured in-house under strict quality control systems.
          </p>

          <p>
            By combining international production expertise with local
            manufacturing strength, we deliver durable, modern and
            cost-effective interior finishing solutions for residential and
            commercial projects.
          </p>

          {/* FEATURE GRID */}
          <div className="about-features">
            <div>
              <h4>Factory Production</h4>
              <p>Large-scale in-house manufacturing facility.</p>
            </div>

            <div>
              <h4>Strict Quality Control</h4>
              <p>Engineered for durability and consistency.</p>
            </div>

            <div>
              <h4>Custom Sizing</h4>
              <p>Flexible production to meet project requirements.</p>
            </div>

            <div>
              <h4>Made in Nigeria</h4>
              <p>Locally manufactured, internationally supported.</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            ref={cardRef}
            className="about-card"
            style={{ backgroundImage: `url(${factory})` }}
          >
            <div className="about-card-overlay">
              <h3>Industrial Scale Facility</h3>
              <p>
                Advanced production lines • Precision engineering • Modern equipment
              </p>

              <div className="about-stats">
                <div>
                  <Counter target={100} suffix="%" />
                  <span>In-House Production</span>
                </div>

                <div>
                  <Counter target={25} suffix="+" />
                  <span>Years Combined Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
