import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      year: '',
      value: '',
      error: '',
    };
  }

  onChangeName = (e, newValue) => {
    this.setState({ name: newValue, error: '' });
  }

  onChangeValue = (e, newValue) => {
    this.setState({ value: newValue, error: '' });
  }

  onChangeYear = (e, newValue) => {
    this.setState({ year: newValue, error: '' });
  }

  onCreateData = (e) => {
    e.preventDefault();
    const { name, value, year } = this.state;
    if (!name || !value || !year) {
      this.setState({ error: "All fields are required" });
      return;
    }
    this.props.onCreateData({ name, value, year });
  }

  render() {
    return (
      <div>
        <h1>Add New One</h1>
        {this.state.error &&
          <h2 style={{ color: "red" }}>
            {this.state.error}
          </h2>
        }
        <form>
          <TextField
            hintText="name"
            onChange={this.onChangeName}
          />
          <br />
          <TextField
            hintText="year"
            onChange={this.onChangeYear}
          />
          <br />
          <TextField
            hintText="value"
            onChange={this.onChangeValue}
          />
          <br />
          <RaisedButton
            label="Create"
            primary={true}
            onTouchTap={this.onCreateData}
          />
        </form>
      </div>
    );
  }
}

Data.propTypes = {
  onCreateData: PropTypes.func.isRequired,
};
export default Data;
