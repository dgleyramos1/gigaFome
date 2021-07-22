import React from 'react';
import { Container } from './styles';

const AdicionarCarrinho: React.FC = () => {
  return(
      <Container>
          <button className="contentBut">
              <span className="contentText">Adicionar ao Carrinho</span>
          </button>
      </Container>
  );
}

export default AdicionarCarrinho;