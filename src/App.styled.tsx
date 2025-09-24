import styled from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap';
import backgroundImg from '../public/img/background_01.jpg';

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Container = styled(BootstrapContainer)`
  flex: 1;
  width: 100vw;
  padding: 2rem;
  padding-bottom: 3rem;
  border-radius: 8px;
  margin: 2rem auto;
  background-image: url('/img/background_01.jpg');
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 2px;
  word-spacing: 5px; 
  color: rgb(255, 255, 255);
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  letter-spacing: 2px;
  word-spacing: 5px; 
  color: rgb(255, 255, 255);
`;

export const CardWrapper = styled.div`
  padding: 2em;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FooterWrapper = styled.div`
  margin-top: auto;
`;

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

export const AccordionNoBorder = styled.div`
  .accordion-item {
    border: 0 !important;
    box-shadow: none !important;
    margin: 0 !important;

    &::before {
      display: none !important;
    }
  }

  .accordion-header {
    border: 0 !important;
    background-color: transparent !important;
    padding: 0 !important;
  }

  .accordion-button {
    background-color: transparent !important;
    border: 0 !important;
    box-shadow: none !important;
    padding: 0.25rem 0 !important;
    color: inherit !important;

    &:focus,
    &:not(.collapsed) {
      box-shadow: none !important;
      outline: none !important;
      background-color: transparent !important;
    }

    &::after {
      display: none !important;
    }
  }
`;
