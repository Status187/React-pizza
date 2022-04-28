import React from "react";
import {Header} from './components'
import {Home, Cart} from "./pages";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import axios from "axios";
import {  useDispatch } from "react-redux";
// import store from "./redux/store";
import {setPizzas} from "./redux/actions/pizzas";

const CART_PAGE = "/cart";
const HOME_PAGE = "/";

function App () {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas));
        });
    }, []);

    return(
        <div className="wrapper">
            <Header />
            <div className="content">
                <BrowserRouter>
                    <Switch>
                        <Route path={CART_PAGE} component={Cart} exact/>
                        <Route path={HOME_PAGE} component={Home} />} exact/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;