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

interface Test {
  cart: IProduct[]
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
    localStorage.setItem('@cart', productStore)
  }


  return(
      <Container>
          <Header/>
            <div className="nav">
              <div className="cart">
                <img src={Cart} alt="shopcart" width="50px" height="auto" />
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
          <Footer/>
      </Container>      
  );
}

export default Cardapio;