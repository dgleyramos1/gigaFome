import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container } from './styles';
import burguer from '../../assert/images/burguer1.png'
import AdicionarCarrinho from '../../components/Buttons/Carrinho';

const Cardapio: React.FC = () => {
  return(
      <Container>
          <Header/>
            <div className="content-cart">
                <span className="nome">X-Salada</span>
                <img src={burguer} alt="" />
                <span  className="priceText">R$10,00</span>
                <AdicionarCarrinho/>
            </div>
          <Footer/>
      </Container>      
  );
}

export default Cardapio;