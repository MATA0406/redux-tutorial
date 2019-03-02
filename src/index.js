import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from "react-redux";

const productReducer = (state = [], action) => {
  return state
}

const userReducer = (state = '', action) => {
  switch(action.type) {
    case 'updateUser':
      return action.payload;
    case 'addUser':
      return 'addUser';
  }
  return state;
}

const allReducers = combineReducers({productReducer, userReducer});

// 1. 초기화
const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log("1", store.getState());

const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
}

const updateUserAction = {
  type: 'updateUser',
  payload: {user: 'MATA'}
}

// 2. 가입
store.subscribe(() => console.log("2", store.getState()));

// 3. 액션 디스패치
store.dispatch(updateUserAction);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
