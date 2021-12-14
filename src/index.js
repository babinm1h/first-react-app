import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import store from './redux/store';
import AppContainer from "../src/components/containers/AppContainer"


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root')
);
