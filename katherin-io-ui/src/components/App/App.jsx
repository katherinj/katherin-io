import * as React from "react";
import { useState, useEffect } from "react";
import {
  MyNavbar,
  Landing,
  About,
  Portfolio,
  Contact,
  Footer,
} from "components";
import DarkModeToggle from "components/DarkModeToggle/DarkModeToggle";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  useScrollReveal(".reveal");

  return (
    <div className="app">
      <MyNavbar dark={dark}>
        <DarkModeToggle dark={dark} onToggle={() => setDark(d => !d)} />
      </MyNavbar>
      <div className="main-content">
        <div id="home"><Landing /></div>
        <div id="about"><About /></div>
        <div id="portfolio"><Portfolio /></div>
        <div id="contact"><Contact /></div>
      </div>
      <Footer />
    </div>
  );
}
