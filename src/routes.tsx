import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './view/Home';
import Cardapio from './view/Cardapio';

const Routes: React.FC = () => {
  return(
      <BrowserRouter>
          <Switch>
              <Route component={Home} path="/" exact />
              <Route component={Cardapio} path="/cardapio" />
          </Switch>
      </BrowserRouter>
  );
}

export default Routes;