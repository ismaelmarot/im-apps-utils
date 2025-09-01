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
  ChevronDownStyled,
  QRImage,
  QrAndTitleContainer
} from './ProjectCard.styled';
import qrImage from '../assets/im-apps-utils.svg';

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledCard>
      <CardBody>
        {/* <QrAndTitleContainer> */}
          
          <CardTitleStyled>{project.title}</CardTitleStyled>
          <QRImage src={qrImage} alt='QR' />
        
        {/* </QrAndTitleContainer> */}
        
        <ProjectButton
          // variant='primary'
          href={`https://ismaelmarot.github.io/${project.id}/#/general`}
          target='_blank'
        >
          Ir al Proyecto
        </ProjectButton>

        <ChevronContainer onClick={() => setOpen(prev => !prev)}>
          <ChevronDownStyled size={22} open={open} />
        </ChevronContainer>

        <Collapse in={open}>
          <div className='mt-2 text-start'>
            <p style={{ paddingLeft: '.5rem', color:'white' }}>{project.description}</p>
            <hr style={{ color:'white' }} />
            <div className='col-6'>
              <RepoButton
                // variant='outline-dark'
                size='sm'
                href={`https://github.com/ismaelmarot/${project.id}`}
                target='_blank'
              >
                <FaGithub className='me-1' /> Ver Repo
              </RepoButton>
            </div>
            <hr style={{ color:'white' }} />
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
