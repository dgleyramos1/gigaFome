import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const ButtonCardapio: React.FC = () => {
  return(
      <Container>
          <button className="contentBut">
                <span className="contentText">
                 <Link to="/cardapio">Cardápio</Link>
                </span>
          </button>
      </Container>    
    );
}

export default ButtonCardapio;