import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Module from 'wt-frame/lib/components/Module';
import './App.css';

class App extends Component {
  render() {
    return (
      <Module>
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
      </Module>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default App;
