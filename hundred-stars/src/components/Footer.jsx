import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <h3>Hundred Stars Plastic Industries Ltd</h3>
          <div className="footer-divider" />
        </div>

        <div className="footer-info">
          <p>
            Ogere Remo, Ikenne Local Government Area,
            Ogun State, Nigeria.
          </p>

          <p className="footer-tagline">
            Premium PVC Wall & Ceiling Panel Manufacturers
          </p>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} Hundred Stars Plastic Industries Ltd
        </span>

      </div>
    </footer>
  );
}
