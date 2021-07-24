import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container } from './styles';
import api from '../../services/api';
import Cart from '../../assert/images/cart.png'



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

  const handleCadastro = (value: any) => {


  }
   function cadastro(){
     let paragrafo = document.createElement("p")
     paragrafo.innerHTML = "Dados cadastrados"
     document.getElementById("texCadastro")?.appendChild(paragrafo)
   }



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
                <form action="">
                  <h2>Cadastro</h2>

                  <label htmlFor="name">Name</label>
                  <input name="nome" placeholder="digite seu Nome aqui" type="text" />

                  <label htmlFor="email">E-mail</label>
                  <input type="email" name="email" placeholder="Digite seu e-mail" />

                  <label htmlFor="endereco">Endereço</label>
                  <input id="endereco" type="text" placeholder="Digite seu endereço" />

                  <button  className="contentBut">
                      <span className="contentText">Cadastrar</span>
                  </button>                     
                      
                </form>
                
              <div>
                    <p id="texCadastro"></p>
              </div>                         
            </div>            
          <Footer/>
      </Container>      
  );
}

export default Cardapio;