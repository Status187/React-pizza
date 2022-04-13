import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/app.scss';
import {BrowserRouter as Router, Route }  from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <App></App>
        </Router>
    </React.StrictMode>
);

reportWebVitals();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );