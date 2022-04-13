import React from "react";
import {Header} from './components'
import {Home, Cart} from "./pages";
import { Route }  from 'react-router-dom'

function App() {

    const clickOnButton = () => {
        alert('Yeah!')
    }

    return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <Route path="/home" component={Home} exact></Route>
              <Route path="/cart" component={Cart} exact></Route>
          </div>
      </div>
  );
}

export default App;
