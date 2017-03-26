import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Home from './containers/Home';
import Data from './containers/Data';
import './index.css';
import store from './store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/data" component={Data} />
      </App>
    </Provider>
  </Router>,
  document.getElementById('root')
);
