import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { topicToBadge } from './topicsBadges/topicsBadges';

type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  tech: string[];
};

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Obtener repos de tu usuario
    fetch("https://api.github.com/users/ismaelmarot/repos?per_page=100")
      .then((res) => res.json())
      .then(async (data) => {
        // 2. Filtrar solo repos con topic 'show-portfolio'
        const filtered = data.filter((repo: any) =>
          repo.topics?.includes("show-portfolio")
        );

        // 3. Mapear a nuestro tipo Project
        const mapped: Project[] = filtered.map((repo: any) => {
          const techBadges = repo.topics
            .filter((topic: string) => topicToBadge[topic])
            .map((topic: string) => topicToBadge[topic]);

          return {
            id: repo.name,
            title: repo.name,
            description: repo.description || "Sin descripción",
            url: repo.homepage || repo.html_url,
            tech: techBadges
          };
        });

        setProjects(mapped);
        setLoading(false);

        // 4. Contadores de visitas
        mapped.forEach((project) => {
          fetch(`https://api.countapi.xyz/hit/ismaelmarot.github.io/${project.id}`)
            .then((res) => res.json())
            .then((data) => {
              setCounts((prev) => ({ ...prev, [project.id]: data.value }));
            });
        });
      });
  }, []);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Mis Proyectos</h1>
      <p className="text-center mb-5">
        Los proyectos se cargan automáticamente desde GitHub y solo se muestran
        los que tienen el topic <strong>show-portfolio</strong>.
      </p>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>

                  <div className="mb-2">
                    {project.tech.map((badge, index) => (
                      <img key={index} src={badge} alt="tech badge" className="mx-1" />
                    ))}
                  </div>

                  <p>Visitas: {counts[project.id] ?? 0}</p>

                  <Button variant="primary" href={project.url} target="_blank">
                    Ver Proyecto
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
