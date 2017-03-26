import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
} from '../actions';
import { api } from '../services';

export default function () {
  return takeEvery(GET_DATA_PENDING, function* doSideEff() {
    try {
      const response = yield call(api.getData);
      yield call(delay, 2517);
      yield put({ type: GET_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      yield put({ type: GET_DATA_FAIL, payload: error.message });
    }
  });
}
