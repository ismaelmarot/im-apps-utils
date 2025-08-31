import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  tech: string[];
};

const projects: Project[] = [
  {
    id: "notes-dos-app",
    title: "Notes Dos App",
    description: "Aplicación para gestionar notas.",
    url: "https://ismaelmarot.github.io/notes-Dos-app/",
    tech: [
      "https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB",
      "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=flat&logo=bootstrap&logoColor=white"
    ]
  },
  {
    id: "otro-proyecto",
    title: "Otro Proyecto",
    description: "Descripción breve del proyecto.",
    url: "https://ismaelmarot.github.io/otro-proyecto/",
    tech: [
      "https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E",
      "https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white"
    ]
  }
];

export default function App() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    projects.forEach(project => {
      fetch(`https://api.countapi.xyz/hit/ismaelmarot.github.io/${project.id}`)
        .then(res => res.json())
        .then(data => {
          setCounts(prev => ({ ...prev, [project.id]: data.value }));
        });
    });
  }, []);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Mis Proyectos</h1>
      <p className="text-center mb-5">
        Bienvenido a mi página central. Aquí encontrarás enlaces a todos mis proyectos publicados en GitHub Pages.
      </p>

      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>

                <div className="mb-2">
                  {project.tech.map((badge, index) => (
                    <img key={index} src={badge} alt="tech badge" className="mx-1"/>
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
    </Container>
  );
}
