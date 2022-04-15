import React from "react";
import {Header} from './components'
import {Home, Cart} from "./pages";
import {Switch, Route, BrowserRouter} from 'react-router-dom'

function App() {
    const [pizzas,setPizzas] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((response) => response.json())
            .then(json => setPizzas(json.pizzas));

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
