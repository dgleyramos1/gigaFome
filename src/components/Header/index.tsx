import React from 'react';
import { Container } from './styles';

const Header: React.FC = () => {
  return(
      <Container>
          <div className="list">
                  <div className="menu">
                    <a href="#home">
                        <li>Home</li>
                    </a>
                  </div>
                  <div className="menu" >
                    <a href="#cardapio">
                        <li>Cardápio</li>
                    </a>
                  </div>
          </div>          
      </Container>
  );
}

export default Header;