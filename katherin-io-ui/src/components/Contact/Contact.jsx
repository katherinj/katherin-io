import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bi44eqo",
        "template_wslic96",
        e.target,
        "RoCUV7dkt-TDx_Yg1",
      )
      .then(
        (result) => {
          alert("I received your message! I'll get back to you soon.");
          e.target.reset();
        },
        () => {
          alert("Something went wrong. Please try again later.");
        },
      );
  };

  return (
    <section className="contact-section" id="contact">
      <Container className="py-5">
        <div className="text-center mb-5 reveal">
          <p className="section-eyebrow">Get in Touch</p>
          <h1 className="page-title mb-3">Let's Connect</h1>
          <p className="contact-lead">
            Feel free to reach out via any of the platforms below or send me a
            message.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a
              href="https://www.linkedin.com/in/katherin-jimenez-2a7876220/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/katherinj"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:katherinmjimenezp@gmail.com"
              className="social-icon-link"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <Row className="justify-content-center">
          <Col xs={12} md={7} className="reveal reveal-delay-2">
            <form onSubmit={handleFormSubmit}>
              <div className="contact-form-group">
                <label className="contact-label">Name</label>
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact-form-group">
                <label className="contact-label">Email</label>
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="contact-form-group">
                <label className="contact-label">Message</label>
                <textarea
                  className="contact-textarea"
                  name="message"
                  placeholder="What's on your mind?"
                  required
                />
              </div>
              <div className="text-center mt-2">
                <button className="contact-submit-btn" type="submit">
                  Send Message ✦
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
