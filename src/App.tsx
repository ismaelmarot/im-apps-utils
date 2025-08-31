import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Collapse } from "react-bootstrap";
import { FaGithub, FaChevronDown } from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  description: string;
  homepage: string;
  html_url: string;
  tech: string[];
};

// Mapeo de topics a badges
const topicToBadge: { [key: string]: string } = {
  react: "https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB",
  bootstrap: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=flat&logo=bootstrap&logoColor=white",
  typescript: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white",
  javascript: "https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E",
  html5: "https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white",
  css3: "https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white",
  nodejs: "https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white",
  express: "https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB",
  electron: "https://img.shields.io/badge/electron-191970.svg?style=flat&logo=Electron&logoColor=white",
};

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [openProjects, setOpenProjects] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetch("https://api.github.com/users/ismaelmarot/repos?per_page=100", {
      headers: { Accept: "application/vnd.github.mercy-preview+json" },
    })
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo: any) =>
          repo.topics?.includes("show-portfolio")
        );

        const mapped: Project[] = filtered.map((repo: any) => {
          const techBadges = repo.topics
            .filter((topic: string) => topicToBadge[topic])
            .map((topic: string) => topicToBadge[topic]);

          return {
            id: repo.name,
            title: repo.name,
            description: repo.description || "Sin descripción",
            homepage: repo.homepage || "",
            html_url: repo.html_url,
            tech: techBadges,
          };
        });

        setProjects(mapped);
      })
      .catch((err) => {
        console.error("Error al obtener repos:", err);
      });
  }, []);

  const toggleProject = (id: string) => {
    setOpenProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Mis Proyectos</h1>
      <p className="text-center mb-5">
        Bienvenido a mi página central. Aquí encontrarás enlaces a todos mis
        proyectos publicados en GitHub Pages.
      </p>

      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <Card.Title>{project.title}</Card.Title>

                <Button
                  variant="primary"
                  href={project.homepage || project.html_url}
                  target="_blank"
                  className="mb-2"
                >
                  Ir Proyecto
                </Button>

                {/* Icono para desplegar detalles */}
                <div
                  onClick={() => toggleProject(project.id)}
                  style={{
                    cursor: "pointer",
                    display: "inline-block",
                    transition: "transform 0.3s",
                    transform: openProjects[project.id] ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  aria-expanded={!!openProjects[project.id]}
                >
                  <FaChevronDown size={24} />
                </div>

                {/* Collapse para detalles */}
                <Collapse in={!!openProjects[project.id]}>
                  <div className="mt-2 text-start">
                    <p>{project.description}</p>
                    <hr />
                    <div className="mb-2">
                      {project.tech.map((badge, i) => (
                        <img
                          key={i}
                          src={badge}
                          alt="tech badge"
                          className="mx-1"
                          height={20}
                        />
                      ))}
                    </div>
                    <hr />
                    <Button
                      variant="outline-dark"
                      size="sm"
                      href={project.html_url}
                      target="_blank"
                    >
                      <FaGithub className="me-1" />
                      Ver Repo
                    </Button>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
