import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container } from './styles';
import api from '../../services/api';
import Cart from '../../assert/images/cart.png';
import contato from '../../assert/images/contato.png';



interface IProduct{
  id: number;
  name: string;
  photo: string;
  price: number;
}


const Cardapio: React.FC = () => {

  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);
  

  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, []);

  const handleCart = (index: number) => {
    let product = data[index]
    let push: any = [...cart, cart.push(product)]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore);
  }
  let entradaEmail = document.getElementById('email');
  let entradaNome = document.getElementById('name');
  let entradaEndereco = document.getElementById('endereco');
  let paragrafo = document.getElementById('texCadastro');
   
  document.getElementById('botao')?.addEventListener('click', function() {       
    let client = `${entradaNome.value} | ${entradaEmail.value} | ${entradaEndereco.value}`;
      localStorage.setItem('@client', client);
      let mensagem = "Você se cadastrou com sucesso!";
      paragrafo.innerText = mensagem;
  });



  return(
      <Container>
          <Header/>
            <div className="nav">
              <div className="cart">
                <img src={Cart} alt="shopcart" />
                <span>( {cart.length} ) - Itens</span>
              </div>
            </div>
            <section>
              { data.map( (prod, index) => (
                <div className="product-content" key={prod.id}>
                  <span className="priceText">{prod.name}</span>
                  <img src={prod.photo} alt="x-salada" />
                  <span className="priceText">R${prod.price}</span>
                  <button onClick={ () => handleCart(index)} className="contentBut">
                      <span className="contentText">Adicionar ao Carrinho</span>
                  </button>
                </div>     
              ))}
            </section>
            <div id="carrinho">
                <form method="POST">
                  <h2>Cadastre-se</h2>

                  <label htmlFor="name">Nome Completo</label>
                  <input name="name" id="name" placeholder="digite seu Nome aqui" type="text" />

                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="email" placeholder="Digite seu e-mail" />

                  <label htmlFor="endereco">Endereço</label>
                  <input id="endereco" name="endereco" type="text" placeholder="Digite seu endereço" />

                  <button id="botao" className="contentBut">
                      <span className="contentText">Cadastre-se</span>
                  </button>

                  <p id="texCadastro"></p>                    
                      
                </form>
                
              <div className="imagContato">
                <img src={contato} alt="" />
                    
              </div>                         
            </div>            
          <Footer/>
      </Container>      
  );
}

export default Cardapio;