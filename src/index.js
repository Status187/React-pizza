import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/app.scss';
import {BrowserRouter as Routes}  from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <Routes>
            <App />
        </Routes>
);

reportWebVitals();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );