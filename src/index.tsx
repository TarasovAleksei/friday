import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Store/redux-store";


ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename={'/friday'}>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
    ,
    document.getElementById('root')
);
