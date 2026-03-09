import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

export default function MyNavbar({ children }) {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleNavClick = (link) => {
    setActiveLink(link);
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar"
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
    >
      <Container fluid className="px-4">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src="/logo.png" alt="Katherin Logo" className="kj-logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-1">
            {["about", "portfolio", "contact"].map(link => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                className={activeLink === link ? "active-link" : ""}
                onClick={() => handleNavClick(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            ))}
            <div className="ms-3">{children}</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
