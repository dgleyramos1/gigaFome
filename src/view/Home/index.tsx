import React from 'react';
import { Container } from './style';
import Burguer from '../../assert/images/burguer1.png';
import ButtonCardapio from '../../components/Buttons/Cardapio';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return(
      <Container>
          <section className="section">
             <div className="content-one">
                <span  className="sextouText">#SEXTOU!</span>
                <span  className="chamadaText">Somente na GigaFome você encontra promoções incriveis para este sextou!</span>
                <span  className="confiText">Confira nosso cardápio</span>
                <ButtonCardapio/>
             </div>
             <div className="content-two">
                 <img className="boxImg" src={Burguer} alt="" />
             </div>
          </section>
          <Footer/>
      </Container>
  );
}

export default Home;