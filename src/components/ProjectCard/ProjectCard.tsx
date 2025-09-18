import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import type { ProjectCardProps } from '../../interface/ProjectCardProps';
import {
  StyledCard,
  CardBody,
  CardTitleStyled,
  ProjectButton,
  RepoButton,
  ChevronContainer,
  ChevronDownStyled,
  QRImage,
} from './ProjectCard.styled';

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledCard>
      <CardBody>
        <CardTitleStyled>{project.title}</CardTitleStyled>

        {project.qrImage && <QRImage src={project.qrImage} alt="QR" />}

        <ProjectButton
          href={`https://ismaelmarot.github.io/${project.id}/#/general`}
          target="_blank"
        >
          Ir al Proyecto
        </ProjectButton>

        <ChevronContainer onClick={() => setOpen(prev => !prev)}>
          <ChevronDownStyled size={22} open={open} />
        </ChevronContainer>

        <Collapse in={open}>
          <div className="mt-2 text-start">
            <p style={{ paddingLeft: '.5rem', color: 'white' }}>
              {project.description}
            </p>
            <hr style={{ color: 'white' }} />
            <div className="col-6">
              <RepoButton
                size="sm"
                href={`https://github.com/ismaelmarot/${project.id}`}
                target="_blank"
              >
                <FaGithub className="me-1" /> Ver Repo
              </RepoButton>
            </div>
            <hr style={{ color: 'white' }} />
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
          </div>
        </Collapse>
      </CardBody>
    </StyledCard>
  );
};

export default ProjectCard;
