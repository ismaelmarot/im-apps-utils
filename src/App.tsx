import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { FaGithub, FaChevronDown } from 'react-icons/fa';
import { topicToBadge } from './topicsBadges/topicsBadges';
import type { Project } from './types/project.type';

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [openProjects, setOpenProjects] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetch('https://api.github.com/users/ismaelmarot/repos?per_page=100', {
      headers: { Accept: 'application/vnd.github.mercy-preview+json' },
    })
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo: any) =>
          repo.topics?.includes('show-portfolio')
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
                  className="mb-2 w-100 w-md-50"
                  style={{ padding:'.6rem 0rem', fontSize:'1.3rem' }}
                
                >
                  Ir al Proyecto
                </Button>

                <div style={{ display:'flex', justifyContent:'right' }}>
                  {/* Icono para desplegar detalles */}
                  <div
                    onClick={() => toggleProject(project.id)}
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      transform: openProjects[project.id] ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    aria-expanded={!!openProjects[project.id]}
                  >
                    <FaChevronDown size={24} />
                  </div>
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
