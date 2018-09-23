import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';


const store = configureStore();

render(
  <Provider store={store}>
     <Router><App /></Router>
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
// registerServiceWorker();
