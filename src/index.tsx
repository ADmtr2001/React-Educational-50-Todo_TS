import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import {store} from "./store";

const GlobalStyle = createGlobalStyle`
  *,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    max-width: 1020px;
    padding: 0 10px;
    margin: 0 auto;
  }
  
  button,
  a {
    color: inherit;
    text-decoration: none;
  }
  
  li,
  ul {
    list-style: none;
  }
`

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle/>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);