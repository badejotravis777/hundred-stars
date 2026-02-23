import { motion } from "framer-motion";
import "../styles/cta.css";

export default function CTA() {

  /* ============================= */
  /* CONTACT ACTIONS */
  /* ============================= */

  const handleWhatsApp = () => {
    const phoneNumber = "2348000000000"; // <-- replace with real number
    const message = encodeURIComponent(
      "Hello, I'm interested in your PVC Interior Panels. Please send more details."
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    const email = "info@hundredstars.com"; // <-- replace with real email
    const subject = encodeURIComponent("PVC Panel Enquiry");
    const body = encodeURIComponent(
      "Hello,\n\nI would like to request more information about your PVC interior panels.\n\nThank you."
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="cta" id="contact">
      <motion.div
        className="cta-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Upgrade Your Interior Finishing?</h2>

        <p>
          Contact our team today for product enquiries, bulk orders or
          installation guidance.
        </p>

        <div className="cta-buttons">
          <button className="cta-button" onClick={handleWhatsApp}>
            Chat on WhatsApp
          </button>

          <button className="cta-outline" onClick={handleEmail}>
            Reach Us by Email
          </button>
        </div>
      </motion.div>
    </section>
  );
}
