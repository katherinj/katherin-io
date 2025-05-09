import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Landing.css";

export default function Landing() {
  return (
    <section className="landing-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Text */}
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="landing-title mb-3">
              Hello,
              <br />
              I'm Katherin
            </h1>
            <p className="landing-subtext mb-3">
              I am a software engineer who enjoys building things that are both
              smart and simple. My passion lies in full-stack development,
              cloud-based solutions, and educational technology.
            </p>
            <p className="landing-subtext mb-3">
              I get excited about creative problem-solving and making data more
              accessible through intuitive visualizations.
            </p>
            <p className="landing-subtext mb-4">
              I focus on crafting solutions that are not just functional, but
              thoughtfully designed.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="fw-semibold text-decoration-underline text-dark"
            >
              View My Resume
            </a>
          </Col>

          {/* Right Image */}
          <Col md={6} className="d-flex justify-content-center">
            <div className="profile-wrapper">
              <div className="profile-bg d-none d-md-block"></div>
              <img
                src="/profile.jpg"
                alt="Katherin"
                className="profile-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
