 import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux";
import './assets/scss/style.scss';
import store from './redux';
 import { Outlet } from "react-router";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
            <Outlet />
        </BrowserRouter>
    </React.StrictMode>,
document.getElementById('root'),
);
