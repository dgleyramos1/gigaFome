import React from 'react';
import { Container } from './styles';

const ButtonCardapio: React.FC = () => {
  return(
      <Container>
          <button className="contentBut">
              <span className="contentText">Cardápio</span>
          </button>
      </Container>    
    );
}

export default ButtonCardapio;