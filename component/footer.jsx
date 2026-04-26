import React from "react";
import "../Footer.css";

export default function Footer() {
  const phoneNumber = "923408286260";
  const email = "qamarwebsitedeveloper@gmail.com";

  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Contact Me</h3>

        <p>
          📱 WhatsApp:{}
          <a
            href={`https://wa.me/${923408286260}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            +{phoneNumber}
          </a>
        </p>

        <p>
          📧 Email:{" "}
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} className="footer-link">
            {email}
          </a>
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}