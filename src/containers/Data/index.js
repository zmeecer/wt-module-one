import Data from './Data';
import { connect } from 'react-redux';
import {
  GET_DATA_PENDING,
  CREATE_DATA,
} from '../../actions';

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  onGetData: () => dispatch({ type: GET_DATA_PENDING }),
  onCreateData: (newData) => dispatch({ type: CREATE_DATA, payload: newData }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Data);
