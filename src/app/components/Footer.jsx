import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-branding">
          <h2 className="footer-logo">ChronoLux</h2>
          <p className="footer-description">
            Timeless craftsmanship meets modern luxury. Explore our world of high-end watches made to last generations.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Men’s Watches</a></li>
              <li><a href="#">Women’s Watches</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Collections</a></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to get special offers and product updates.</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-socials">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fas fa-envelope"></i>
        </div>
        <p>&copy; {new Date().getFullYear()} ChronoLux. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
