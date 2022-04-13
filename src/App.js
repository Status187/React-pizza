import React from "react";
import {Header} from './components'
import {Home, Cart} from "./pages";
import {Switch, Route, BrowserRouter} from 'react-router-dom'

function App() {

    const CART_PAGE = "/cart";
    const HOME_PAGE = "/";

    return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <BrowserRouter>
                  <Switch>
                      <Route path={CART_PAGE} component={Cart} />
                      <Route path={HOME_PAGE} component={Home} />
                  </Switch>
              </BrowserRouter>


          </div>
      </div>
  );
}

export default App;
