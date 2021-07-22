import React from 'react';
import { Container } from './styles';
import LinkedIn from '../../assert/images/linkedin.png';
import Github from '../../assert/images/github.png';

const Footer: React.FC = () => {
  return(
      <Container>
          <span  className="author">Dgley Ramos</span>
          <a href="https://www.linkedin.com/in/dgley-ramos-4a441220b/" target="_blank">
              <img src={LinkedIn} alt="Perfil do LinkedIn" />
          </a>
          <a href="https://github.com/dgleyramos1" target="_blank">
              <img src={Github} alt="Perfil do Github" />
          </a>
      </Container>
  );
}

export default Footer;