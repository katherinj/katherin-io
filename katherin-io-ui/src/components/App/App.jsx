import * as React from "react";
import {
  MyNavbar,
  Landing,
  About,
  Portfolio,
  Contact,
  Footer,
} from "components";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <MyNavbar />
      <div className="main-content">
        <div id="home">
          <Landing />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
