import React from "react";
import {Header} from './components'
import {Home, Cart} from "./pages";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import axios from "axios";

function App() {
    const [pizzas,setPizzas] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            console.log(data.pizzas)
            setPizzas(data.pizzas)
        });
    }, []);

    const CART_PAGE = "/cart";
    const HOME_PAGE = "/";

    return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <BrowserRouter>
                  <Switch>
                      <Route path={CART_PAGE} component={Cart} exact/>
                      <Route path={HOME_PAGE} render={() => <Home items={pizzas}/>} exact/>

                  </Switch>
              </BrowserRouter>
          </div>
      </div>
  );
}

export default App;
