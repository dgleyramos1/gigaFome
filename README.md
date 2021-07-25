## Desafio 2# - Gestão de Cadastros

##### 2° Entrega - Gestão de Cadastros

Criação de um sistema e-commerce para inventário de produtos e dados de clientes:

**Entregáveis**:

- [x] Os dados de clientes, endereços e produtos devem estar devidamente estruturados

- [x] Dados no localstorage

- [x] Código fonte no github com o arquivo README detalhando as funcionalidades da programação



## Tecnologias usadas:

- React.js

  `npx create-react-app`

- TypeScript

  Iniciando aplicação com `–template=typescript`

- Styled-components

  Estilização de paginas e componentes

- HTML/JSX

  Criação de container e conteúdos nas paginas

- Javascript

- Axios

  `yarn add axios`

  Criação de FULL REST API fake 

- Json

  `yarn add json-server -D`

  Criação de um servidor por meio da porta 8888

  Criação de objeto, com um outra array de objetos

  

#### O que foi feito?

Foi desenvolvido um sistema de e-commerce para uma hambúrgueria, com react desenvolvemos três views, que estão interligadas por meio de rotas, utilizer o `react-router-dom` para construir a estrutura das rotas.

```react
{data.map( (prod, index) => (
    <div className="product-content" key={prod.id}>
        <span className="priceText">{prod.name}</span>
        <img src={prod.photo} alt="x-salada" />
        <span className="priceText">R${prod.price}</span>
        <button onClick={ () => handleCart(index)} className="contentBut">
            <span className="contentText">Comprar Agora</span>
        </button>
    </div>
))}
```

Através desse código buscamos por meio do ID todos os produtos listados no server.json, e construímos todos os carts que forem precisos.

```react
const handleCart = (index: number) => {
    let product = data[index]
    let push: any = [...cart, cart.push(product)]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
}
```

Criamos aqui a ação de click do botão de adicionar ao carrinho, onde ele vai pegar o dado do produto através do seu index. Aqui também ele já armazena o dado no cart e em seguida na localStorage.

```react
const entradaEmail = document.getElementById('email') as HTMLInputElement
  const entradaNome = document.getElementById('nome') as HTMLInputElement
  const entradaEndereco = document.getElementById('endereco') as HTMLInputElement 

  document.getElementById('botao')?.addEventListener('click', function() {
      let client = `${entradaEmail.value} | ${entradaEmail.value} | ${entradaEndereco.value}`;
      localStorage.setItem('@client', client);
      console.log(entradaNome);
      //alert("Você se cadastrou com sucesso!");
  });
```

Evento de click no botão de cadastro, ele obtém os dados dos inputs e armazena no localStorage.


```react
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/dgleyramos1/demo/produtos'
})

export default api;
```

Ele importa a tecnologia axios, e cria uma API fake com base nessa url. Criei um repositório somente para armazenar os dados para aquisição `https://github.com/dgleyramos1/demo`


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
