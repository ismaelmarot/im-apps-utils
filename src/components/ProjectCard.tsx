import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import type { ProjectCardProps } from '../interface/ProjectCardProps';
import {
  StyledCard,
  CardBody,
  CardTitleStyled,
  ProjectButton,
  RepoButton,
  ChevronContainer,
  ChevronDownStyled
} from './ProjectCard.styled';

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledCard>
      <CardBody>
        <CardTitleStyled>{project.title}</CardTitleStyled>

        <ProjectButton
          variant='primary'
          href={`https://ismaelmarot.github.io/${project.id}/#/general`}
          target='_blank'
        >
          Ir al Proyecto
        </ProjectButton>

        <ChevronContainer onClick={() => setOpen(prev => !prev)}>
          <ChevronDownStyled size={15} open={open} />
        </ChevronContainer>

        <Collapse in={open}>
          <div className='mt-2 text-start'>
            <p style={{ paddingLeft: '.5rem' }}>{project.description}</p>
            <hr />
            <div className='col-6'>
              <RepoButton
                variant='outline-dark'
                size='sm'
                href={`https://github.com/ismaelmarot/${project.id}`}
                target='_blank'
              >
                <FaGithub className='me-1' /> Ver Repo
              </RepoButton>
            </div>
            <hr />
            <div className='mb-2'>
              {project.tech.map((badge, i) => (
                <img key={i} src={badge} alt='tech badge' className='mx-1' height={20} />
              ))}
            </div>
          </div>
        </Collapse>
      </CardBody>
    </StyledCard>
  );
};

export default ProjectCard;
