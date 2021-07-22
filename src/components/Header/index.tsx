import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return(
      <Container>
          <div className="list">
                  <div className="menu">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                  </div>
                  <div className="menu" >
                      <li>
                        <Link to="/cardapio">Cardápio</Link>
                      </li>
                  </div>
          </div>          
      </Container>
  );
}

export default Header;