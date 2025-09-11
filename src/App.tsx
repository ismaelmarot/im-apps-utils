import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { allowedProjects } from './projectsConfig/projectsConfig';
import type { ProjectFromAPI } from './interface/ProjectFromAPI';
import { topicToBadgeConfig } from './constants/topicToBadgeConfig';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Footer from './components/Footer/Footer';

function App() {
  const [projects, setProjects] = useState<typeof allowedProjects>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ismaelmarot/repos?per_page=100', {
      headers: { Accept: 'application/vnd.github.mercy-preview+json' },
    })
      .then(res => res.json())
      .then((data: ProjectFromAPI[]) => {
        const mapped = allowedProjects.map(ap => {
          const repo = data.find(r => r.name === ap.id);
          let badges: string[] = [];

          if (repo && repo.topics && repo.topics.length > 0) {
            badges = repo.topics.map(topic => {
              const cfg = topicToBadgeConfig[topic.toLowerCase()];
              if (cfg) {
                return `https://img.shields.io/badge/${encodeURIComponent(
                  topic
                )}-${cfg.color}?style=flat&logo=${cfg.logo}&logoColor=white`;
              }
              return `https://img.shields.io/badge/${encodeURIComponent(topic)}-007bff?style=flat`;
            });
          } else {
            badges = ap.tech;
          }

          return {
            ...ap,
            tech: badges,
            description: repo?.description || ap.description,
            qrImage: ap.qrImage || ''
          };
        });
        setProjects(mapped);
      })
      .catch(err => console.error('Error al obtener repos:', err));
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container style={{ flex: 1, width: '100vw' }}>
        <h1 className='text-center mb-4'>iM Apps Utils</h1>
        <p className='text-center mb-5'>
          Bienvenido.<br />
          Aquí encontrarás enlaces a proyectos de utilidades publicados en mi GitHub Pages.
        </p>

        <Row xs={1} md={2} lg={3} className='g-4'>
          {projects.map(project => (
            <Col key={project.id}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>

      <div style={{ marginTop: 'auto' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
