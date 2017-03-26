import React, { Component, PropTypes } from 'react';

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
          <h2>loading...</h2>
        }
        {error &&
          <h2>Error: {error}</h2>
        }
        {items &&
          <div>
            {items.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>
        }
        {!items && !loading && !error &&
          <h2>No data</h2>
        }
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
};
export default Data;
