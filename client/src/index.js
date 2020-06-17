import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware } from "redux";
import reducer from "./store/reducers/index"
import { Provider } from 'react-redux';
import thunk from "redux-thunk";


const store = createStore(reducer , applyMiddleware(thunk));
const jsx = (
    <Provider store = {store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();
