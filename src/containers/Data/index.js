import Data from './Data';
import { connect } from 'react-redux';
import {
  GET_DATA_PENDING,
} from '../../actions';

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  onGetData: () => dispatch({ type: GET_DATA_PENDING }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Data);
