import * as React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Landing.css";

const ROLES = [
  "Full-Stack Developer",
  "Problem Solver",
  "Cloud Enthusiast",
  "Creative Thinker",
];

function TypeWriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (paused) {
      const t = setTimeout(() => setPaused(false), 1400);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      setPaused(true);
      const t = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        35,
      );
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, paused, roleIdx]);

  return (
    <span className="typewriter-text">
      {displayed}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

export default function Landing() {
  return (
    <section className="landing-section">
      {/* Soft pastel blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <Container className="position-relative">
        <Row className="align-items-center">
          <Col md={6} className="mb-5 mb-md-0">
            <p className="landing-eyebrow reveal">Software Engineer</p>
            <h1 className="landing-title reveal reveal-delay-1">
              Hello, I'm <em>Katherin</em>
            </h1>
            <p className="landing-role reveal reveal-delay-2">
              <TypeWriter />
            </p>
            <hr className="landing-divider reveal reveal-delay-2" />
            <p className="landing-subtext reveal reveal-delay-3">
              I build things that are both smart and simple — full-stack
              development, cloud-based solutions, and educational technology.
              Excited by creative problem-solving and making data more
              accessible through intuitive visualizations.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link reveal reveal-delay-4"
            >
              View Resume →
            </a>
          </Col>

          <Col
            md={6}
            className="d-flex justify-content-center reveal reveal-delay-2"
          >
            <div className="profile-wrapper">
              <div className="profile-bg d-none d-md-block" />
              <img
                src="/profile.jpg"
                alt="Katherin"
                className="profile-image"
              />
              {/* Soft halo ring */}
              <div className="profile-halo d-none d-md-block" />
              {/* Available badge
              <div className="available-badge">
                <span className="available-dot" />
                Open to work
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
