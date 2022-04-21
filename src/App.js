import React from "react";
import {Header} from './components'
import {Home, Cart} from "./pages";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import axios from "axios";
import { connect } from "react-redux";
// import store from "./redux/store";
import {setPizzas} from "./redux/actions/pizzas";

const CART_PAGE = "/cart";
const HOME_PAGE = "/";

// function App() {
//     React.useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas)
//         });
//     }, []);
//
//
//
//     return
// }

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            window.store.dispatch(setPizzas(data.pizzas));
        });
    }

    render() {
        console.log(this.props.items);
        return(
            <div className="wrapper">
                <Header />
                <div className="content">
                    <BrowserRouter>
                        <Switch>
                            <Route path={CART_PAGE} component={Cart} exact/>
                            <Route path={HOME_PAGE} render={() => <Home items={this.props.items}/>} exact/>

                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.pizzas.items
    }
}

export default connect(mapStateToProps)(App);
