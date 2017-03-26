import {
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
} from '../actions';

export const initialState = {
  loading: false,
  items: null,
  error: null,
};

export default function companies(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data,
      };
    case GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
