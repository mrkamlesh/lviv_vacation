import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from '../src/components/App/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from '../src/reducers/rootReducer';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const store = createStore(  
    combineReducer,
    applyMiddleware(thunk, loggerMiddleware)
);

// configureFakeBackend();
ReactDOM.render(
    <Provider store = { store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

export {store};