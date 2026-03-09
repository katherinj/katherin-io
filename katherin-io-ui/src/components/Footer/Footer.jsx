import * as React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave" aria-hidden="true">✦ ✧ ✦ ✧ ✦</div>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/katherin-jimenez-2a7876220/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/katherinj" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="mailto:katherinmjimenezp@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Katherin Jimenez
      </p>
      <p className="footer-made">designed & built with ♥</p>
    </footer>
  );
}
