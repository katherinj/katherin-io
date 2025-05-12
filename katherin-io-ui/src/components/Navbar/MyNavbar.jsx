import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

export default function MyNavbar() {
  const [activeLink, setActiveLink] = useState("about");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container fluid className="px-4">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/logo.png"
            alt="Katherin Logo"
            style={{ height: "40px", width: "auto" }}
            className="kj-logo-img"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#about"
              className={activeLink === "about" ? "active-link" : ""}
              onClick={() => handleSetActive("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={activeLink === "portfolio" ? "active-link" : ""}
              onClick={() => handleSetActive("portfolio")}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeLink === "contact" ? "active-link" : ""}
              onClick={() => handleSetActive("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
