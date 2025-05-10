import React, { useState } from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";

const projectsData = [
  {
    title: "TrackerMax",
    liveLink: "https://tracker-max.surge.sh/",
    liveLinkDescription: "Live Site",
    repoLink:
      "https://github.com/Codepath-SITE-Workday9/BugTracker?tab=readme-ov-file",
    repoLinkDescription: "GitHub Repo",
    description: "A bug tracking tool built with the PERN stack.",
    imageUrl: "trackermax.gif",
    skills: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Word Cloud",
    liveLink: "https://katherinj.github.io/DataVisualization/assignment4/",
    liveLinkDescription: "Live GitHub Page",
    repoLink:
      "https://github.com/katherinj/DataVisualization/tree/main/assignment4",
    repoLinkDescription: "GitHub Repo",
    imageUrl: "wordcloud.gif",
    description:
      "A visual representation of textual data where word size reflects frequency.",
    skills: ["React", "D3"],
  },
  {
    title: "Light & Sound Memory Game",
    liveLink: "https://vigorous-thunder-wash.glitch.me/",
    liveLinkDescription: "Play Game",
    repoLink: "https://github.com/katherinj/light-sound-memory-game",
    repoLinkDescription: "GitHub Repo",
    description: "A fun memory game using JavaScript, HTML, and CSS.",
    imageUrl: "memorygame.gif",
    skills: ["JavaScript", "HTML", "CSS"],
  },
];

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const projectData = [
      project.title.toLowerCase(),
      ...project.skills.map((skill) => skill.toLowerCase()),
    ];

    return searchTerms.every((term) =>
      projectData.some((data) => data.includes(term))
    );
  });

  return (
    <Container className="portfolio">
      <h1 className="text-center my-4">My Portfolio</h1>

      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by project name, skill or language..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      <Row xs={1} sm={2} md={3} className="g-4">
        {filteredProjects.map((project, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={project.imageUrl}
                alt={project.title}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                {project.liveLink && (
                  <Card.Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.liveLinkDescription}
                  </Card.Link>
                )}
                <br />
                {project.repoLink && (
                  <Card.Link
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.repoLinkDescription}
                  </Card.Link>
                )}
                <Card.Text className="mt-2">{project.description}</Card.Text>
                <Card.Text>
                  <strong>Skills: </strong>
                  {project.skills.join(", ")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
