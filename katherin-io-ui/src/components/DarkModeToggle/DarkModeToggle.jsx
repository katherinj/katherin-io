import React from "react";
import "./DarkModeToggle.css";

export default function DarkModeToggle({ dark, onToggle }) {
  return (
    <button
      className={`dark-toggle ${dark ? "is-dark" : ""}`}
      onClick={onToggle}
      aria-label="Toggle dark mode"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="toggle-track">
        <span className="toggle-icons">
          <span className="icon-sun">☀️</span>
          <span className="icon-moon">🌙</span>
        </span>
        <span className="toggle-thumb" />
      </span>
    </button>
  );
}
