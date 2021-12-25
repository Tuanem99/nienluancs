import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/index.css'
import App from './App';
import {
    BrowserRouter as Router
} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./APP/store";
import {SnackbarProvider} from "notistack";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <SnackbarProvider anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                <App/>
            </SnackbarProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);
