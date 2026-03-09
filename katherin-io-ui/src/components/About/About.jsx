import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

const skillGroups = [
  {
    label: "Languages",
    icon: "✦",
    skills: ["JavaScript", "Java", "Python", "C/C++", "Bash", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    icon: "✧",
    skills: ["React", "Spring Boot", "Node.js", "Express", "D3"],
  },
  {
    label: "Databases & Tools",
    icon: "✦",
    skills: ["PostgreSQL", "MySQL", "Git", "Jira", "AWS"],
  },
  {
    label: "Testing",
    icon: "✧",
    skills: ["JUnit", "Mockito"],
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Capgemini",
    period: "2026",
    color: "#a3ca8b",
    bullets: [],
  },
  {
    role: "Software Application Development Engineer Intern",
    company: "Workday",
    period: "2023",
    color: "#a78bca",
    bullets: [
      "Led PDF form generation project for the Federal HR team",
      "Built secure solutions in Workday's proprietary OOP language (Java-based)",
      "Customized BIRT reports with JavaScript for dynamic layout rendering",
      "Worked Agile Scrum using Jira across multiple sprints",
    ],
  },
  {
    role: "Backend Engineer Fellow",
    company: "Netflix Pathways Bootcamp",
    period: "2023",
    color: "#f0a6c0",
    bullets: [
      "12-week immersive backend program: Java, Spring Boot, REST APIs, AWS",
      "Built scalable microservices using Spring Boot, TDD, Git, CI/CD pipelines, RESTful APIs, and AWS, with a strong focus on maintainability and deployment readiness",
    ],
  },
  {
    role: "Full Stack Software Development Intern",
    company: "Workday × CodePath",
    period: "2022",
    color: "#93bfe8",
    bullets: [
      "Designed and developed a minimum viable product (MVP) using the PERN stack (PostgreSQL, Express, React, Node.js)",
      "Collaborated in Agile sprints, conducted code reviews, and managed source control with Git to deliver on time and within scope",
    ],
  },
];

const education = [
  {
    school: "New Jersey Institute of Technology",
    degree: "B.S. Computer Science",
    period: "May 2025",
    note: "Database Design and Management, Artificial Intelligence, Machine Learning, Advanced Data Structures & Algorithms, Intensive Programming in Linux, Computability, Android App Development, Cybersecurity",
  },
];

export default function About() {
  return (
    <section id="about-me" className="about-section">
      <Container className="py-5">
        <div className="text-center mb-5 reveal">
          <p className="section-eyebrow">Background</p>
          <h1 className="page-title mb-2">About Me</h1>
          <p className="section-subtitle">
            A deeper look at my skills and experience
          </p>
        </div>

        {/* Skills */}
        <div className="about-card reveal reveal-delay-1 mb-4">
          <span className="card-label">Skills</span>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <p className="skill-group-label">
                  <span className="skill-group-icon">{group.icon}</span>
                  {group.label}
                </p>
                <div className="skill-pills">
                  {group.skills.map((s) => (
                    <span key={s} className="skill-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="about-card reveal reveal-delay-2 mb-4">
          <span className="card-label">Experience</span>
          <div className="timeline">
            {experience.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div
                  className="timeline-dot"
                  style={{ background: item.color }}
                />
                <div className="timeline-line" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-role">{item.role}</span>
                    <span className="timeline-company">{item.company}</span>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <ul className="timeline-bullets">
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="about-card reveal reveal-delay-3">
          <span className="card-label">Education</span>
          <div className="edu-grid">
            {education.map((e, i) => (
              <div className="edu-item" key={i}>
                <div className="edu-icon">🎓</div>
                <div>
                  <p className="edu-school">{e.school}</p>
                  <p className="edu-degree">
                    {e.degree} · <span className="edu-period">{e.period}</span>
                  </p>
                  <p className="edu-note">{e.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Skills() {
  return null;
}
export function Experience() {
  return null;
}
export function Education() {
  return null;
}
