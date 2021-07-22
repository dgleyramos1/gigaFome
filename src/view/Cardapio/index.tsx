import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container } from './styles';

const Cardapio: React.FC = () => {
  return(
      <Container>
          <Header/>
          <Footer/>
      </Container>      
  );
}

export default Cardapio;