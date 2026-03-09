import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";

const projectsData = [
  {
    title: "TrackerMax",
    liveLink: "https://tracker-max.surge.sh/",
    liveLinkDescription: "Live Site",
    repoLink: "https://github.com/Codepath-SITE-Workday9/BugTracker?tab=readme-ov-file",
    repoLinkDescription: "GitHub Repo",
    description: "A full-featured bug tracking tool built with the PERN stack. Teams can create, assign, and track issues across projects in real time.",
    imageUrl: "trackermax.gif",
    skills: ["React", "Node.js", "Express", "PostgreSQL"],
    accent: "#a78bca",
  },
  {
    title: "Word Cloud",
    liveLink: "https://katherinj.github.io/DataVisualization/assignment4/",
    liveLinkDescription: "Live GitHub Page",
    repoLink: "https://github.com/katherinj/DataVisualization/tree/main/assignment4",
    repoLinkDescription: "GitHub Repo",
    imageUrl: "wordcloud.gif",
    description: "An interactive D3-powered word cloud where word size reflects text frequency. Paste any text and watch it come to life.",
    skills: ["React", "D3"],
    accent: "#93bfe8",
  },
  {
    title: "Light & Sound Memory Game",
    liveLink: "https://vigorous-thunder-wash.glitch.me/",
    liveLinkDescription: "Play Game",
    repoLink: "https://github.com/katherinj/light-sound-memory-game",
    repoLinkDescription: "GitHub Repo",
    description: "A Simon-style memory game with light and sound cues. Built from scratch with vanilla JavaScript, HTML, and CSS.",
    imageUrl: "memorygame.gif",
    skills: ["JavaScript", "HTML", "CSS"],
    accent: "#f0a6c0",
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`project-card ${hovered ? "project-card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image with overlay */}
      <div className="project-card-img-wrap">
        <img className="project-card-img" src={project.imageUrl} alt={project.title} />
        <div className="project-card-overlay">
          <div className="project-card-overlay-links">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                View Live ↗
              </a>
            )}
            {project.repoLink && (
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="overlay-btn overlay-btn--ghost">
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="project-card-body">
        <div className="project-card-accent" style={{ background: project.accent }} />
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="skill-tags">
          {project.skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const terms = searchTerm.toLowerCase().split(" ").filter(Boolean);
    if (!terms.length) return true;
    const haystack = [project.title.toLowerCase(), ...project.skills.map((s) => s.toLowerCase())];
    return terms.every((term) => haystack.some((h) => h.includes(term)));
  });

  return (
    <section className="portfolio-section">
      <Container className="py-5">
        <div className="text-center mb-5 reveal">
          <p className="section-eyebrow">Work</p>
          <h1 className="page-title mb-4">My Portfolio</h1>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <div className="search-wrap">
                <span className="search-icon">🔍</span>
                <input
                  className="portfolio-search"
                  type="text"
                  placeholder="Search by project or skill..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </Col>
          </Row>
        </div>

        <Row xs={1} sm={2} md={3} className="g-4">
          {filteredProjects.map((project, index) => (
            <Col key={index} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
