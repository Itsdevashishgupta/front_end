import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';

const rootElement = document.getElementById('root');

const appElement = React.createElement(App);

const providerElement = React.createElement(
  Provider,
  { store },
  appElement
);

const browserRouterElement = React.createElement(
  BrowserRouter,
  null,
  providerElement
);

ReactDOM.createRoot(rootElement).render(browserRouterElement);
