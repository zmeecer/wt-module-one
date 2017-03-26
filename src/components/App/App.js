import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to WeeklyTalks.Redux</h2>
          </div>
          <FlatButton
            containerElement={
              <Link to="/" />
            }
            label="Home"
          />
          <FlatButton
            containerElement={
              <Link to="/data" />
            }
            label="Data"
          />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default App;
