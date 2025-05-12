import * as React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/katherin-jimenez"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/katherinj" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:katjimenez98@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Katherin Jimenez. All rights reserved.
      </p>
    </div>
  );
}
