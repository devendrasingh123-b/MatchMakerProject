// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>MatchMe 💞</h3>
          <p>
            Find your perfect match with ease. Simple, safe, and fun matchmaking
            for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: deendrasingh20025@gmail.com</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MatchMe — Made with ❤️ by Devendra</p>
      </div>
    </footer>
  );
}
