import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import type { ChevronProps } from '../interface/ChevronProps';

export const StyledCard = styled(Card)`
  height: 100%;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

export const CardBody = styled(Card.Body)`
  text-align: center;
  padding: 0;
  border: 1px solid #222f3e;
  border-radius: 3px;
`;

export const CardTitleStyled = styled(Card.Title)`
  background: #222f3e;
  color: white;
  padding: 1rem;
`;

export const ProjectButton = styled(Button)`
  margin: 1rem;
  font-size: 1rem;
`;

export const RepoButton = styled(Button)`
  color: #FFFFF0;
  background-color: #2c3e50;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ChevronContainer = styled.div`
  display: flex;
  justify-content: right;
  padding: 0 1rem 0.5rem 0;
  cursor: pointer;
  transition: transform 0.3s;
`;

export const ChevronDownStyled = styled(FaChevronDown)<ChevronProps>`
  transition: transform 0.3s;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const QRImage = styled.img`
  width: 120px;
  margin: 0.5rem 0;
  border: 1px solid #222f3e;
  border-radius: 5px;
`;