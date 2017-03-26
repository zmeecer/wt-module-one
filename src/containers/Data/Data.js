import React, { Component, PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {
  Table, TableBody, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn,
} from 'material-ui/Table';
import New from './New';

class Data extends Component {
  componentDidMount() {
    this.props.onGetData();
  }

  render() {
    const {loading, error, items } = this.props.data;

    return (
      <div>
        <h1>Data</h1>
        {loading &&
          <LinearProgress mode="indeterminate"/>
        }
        {error &&
          <h2>Error: {error}</h2>
        }
        {items &&
          <Table selectable={false}>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Year</TableHeaderColumn>
                <TableHeaderColumn>Value</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{item.id}</TableRowColumn>
                  <TableRowColumn>{item.name}</TableRowColumn>
                  <TableRowColumn>{item.year}</TableRowColumn>
                  <TableRowColumn>{item.pantone_value}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
        {!items && !loading && !error &&
          <h2>No data</h2>
        }
        <New onCreateData={this.props.onCreateData}/>
      </div>
    );
  }
}

Data.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    items: PropTypes.array,
  }),
  onGetData: PropTypes.func.isRequired,
  onCreateData: PropTypes.func.isRequired,
};
export default Data;
