import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to WeeklyTalks.Redux</h2>
        </div>
        <ul className="App-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default App;
