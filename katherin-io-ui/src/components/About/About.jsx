import React from "react";
import { Container, Row, Col, Button, Accordion, Card } from "react-bootstrap";
import "./About.css";

export default function About() {
  const skills = [
    "Java",
    "JavaScript",
    "Python",
    "C/C++",
    "PostgreSQL",
    "Spring Boot",
    "HTML",
    "CSS",
    "React",
    "Node",
    "Express",
    "Git",
    "MySQL",
    "Bash",
    "Mockito",
    "JUnit",
  ];

  return (
    <section id="about-me">
      <Container className="py-5">
        <h1 className="text-center mb-2 page-title">About Me</h1>
        <p className="text-center text-muted mb-4">
          A deeper look at my background, skills, and experience
        </p>

        <Skills skills={skills} />
        <Experience />
        <Education />
      </Container>
    </section>
  );
}

export function Skills({ skills }) {
  return (
    <Row className="mb-5 justify-content-center">
      <Col>
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title>Skills</Card.Title>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {skills.map((skill, index) => (
                <Button key={index} variant="outline-primary" size="sm">
                  {skill}
                </Button>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export function Experience() {
  return (
    <Row className="mb-5 justify-content-center">
      <Col>
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title>Experience</Card.Title>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Workday / SWE Intern</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Led a project for the Federal HR team focused on dynamic
                      PDF form generation
                    </li>
                    <li>
                      Developed secure solutions using Workday’s proprietary OOP
                      language built on Java
                    </li>
                    <li>
                      Created and maintained detailed technical design documents
                      and UML diagrams
                    </li>
                    <li>
                      Customized BIRT reports with JavaScript for dynamic layout
                      rendering
                    </li>
                    <li>
                      Worked within an Agile Scrum team to deliver features
                      across sprints using Jira
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Netflix Pathways Bootcamp</Accordion.Header>
                <Accordion.Body>
                  Completed a 12-week immersive backend program focusing on
                  Java, Spring Boot, REST APIs, and AWS. Built scalable
                  microservices and collaborated on real-world use cases under
                  the guidance of Netflix engineers.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Workday x CodePath / Full Stack Intern
                </Accordion.Header>
                <Accordion.Body>
                  Selected from 1,800+ applicants for a competitive 10-week
                  internship. Built a fully functional web application using the
                  PERN stack, applying Agile workflows and industry-level
                  deployment practices.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Walmart Pharmacy / Certified Technician
                </Accordion.Header>
                <Accordion.Body>
                  Completed Connexus training to assist with prescription
                  management, insurance billing, and patient communication —
                  building both technical and client-facing experience.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export function Education() {
  return (
    <Row className="justify-content-center">
      <Col>
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title>Education</Card.Title>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  New Jersey Institute of Technology
                </Accordion.Header>
                <Accordion.Body>
                  B.S. in Computer Science, May 2025. Focused on software
                  engineering, data structures, and algorithms.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Mercer County Community College
                </Accordion.Header>
                <Accordion.Body>
                  Completed foundational coursework in programming, calculus,
                  and databases prior to transferring to NJIT.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
