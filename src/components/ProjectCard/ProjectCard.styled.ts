import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import type { ChevronProps } from '../../interface/ChevronProps';

export const StyledCard = styled(Card)`
  height: 100%;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    inset 0 0 20px rgba(255, 255, 255, 0.2),
    0 10px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px) saturate(200%);
  -webkit-backdrop-filter: blur(20px) saturate(200%);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0.15) 100%
    );
    transform: rotate(25deg);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow:
      inset 0 0 25px rgba(255, 255, 255, 0.25),
      0 15px 50px rgba(0, 0, 0, 0.3);
  }
`;

export const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;

  background-color: transparent !important;
`;

export const CardTitleStyled = styled(Card.Title)`
  color: white;
  padding: 1rem 0;
  font-size: 2rem;
  letter-spacing: 1px;
  word-spacing: 2px;
  text-shadow: 0 2px 6px rgba(0,0,0,0.5);
`;

export const ProjectButton = styled(Button)`
  margin: 1rem;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: black;
  padding: 0.5rem 1.5rem;
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out, transform 0.3s ease-in-out, font-size 0.3s ease-in-out;

  &:hover {
    border-color: rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    font-size: 1.25rem;
  }
`;

export const RepoButton = styled(Button)`
  color: #fffff0;
  background-color: rgba(77, 92, 107, 0.75);
  border-color: rgba(255, 255, 255, 0.25);
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

export const ChevronContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem 0.5rem 0;
  cursor: pointer;
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  box-shadow: 0 4px 25px rgba(0,0,0,0.3);
`;
