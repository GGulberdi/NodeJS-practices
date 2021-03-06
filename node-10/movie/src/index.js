import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import logger from 'redux-logger'
import reduxPromise from 'redux-promise-middleware';

const myStore= createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,reduxPromise,logger)))// logger have to be on the end

ReactDOM.render(
  <BrowserRouter>
  <Provider store={myStore}>
    <App/>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
