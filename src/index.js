import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import history from './services/history';

import store from './store';

import App from './App';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <Router history={history}>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
