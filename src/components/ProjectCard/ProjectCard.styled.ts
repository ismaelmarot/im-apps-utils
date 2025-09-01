import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import type { ChevronProps } from '../../interface/ChevronProps';

export const StyledCard = styled(Card)`
  height: 100%;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border: none;
`;

export const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  background: #222f3e;
  align-items: center;
  border-radius: 1rem;
`;

export const CardTitleStyled = styled(Card.Title)`
  color: white;
  padding: 1rem 0 0;
  font-size: 2rem;
`;

export const ProjectButton = styled(Button)`
  margin: 1rem;
  font-size: 1.2rem;
  background-color: #efef51;
  border-color: #222f3e;
  color: black;
  font-weight: bold;
  padding: .5rem 1.5rem;
`;

export const RepoButton = styled(Button)`
  color: #FFFFF0;
  background-color: #4d5c6bff;
  border-color: #4d5c6bff;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const QrAndTitleContainer= styled.div`
  background: #222f3e;
  margin: .2rem;
  border-radius: 3px 3px 0 0;
`;

export const ChevronContainer = styled.div`
  display: flex;
  justify-content: right;
  padding: 0 1rem 0.5rem 0;
  cursor: pointer;
  transition: transform 0.3s;
  width: 100%;
`;

export const ChevronDownStyled = styled(FaChevronDown)<ChevronProps>`
  transition: transform 0.3s;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: white;
`;

export const QRImage = styled.img`
  width: 12rem;
  margin: 1rem;
  border: 1px solid #222f3e;
  border-radius: 5px;
`;