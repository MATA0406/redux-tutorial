import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from "react-redux";
import {allReducers} from "./redux/reducers";
import {updateUser, updateUserAction} from "./redux/actions";
import {store} from "./redux/store";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

store.dispatch(updateUser('Jane'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
