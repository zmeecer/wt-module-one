import data from './data';

export default function* rootSaga() {
  yield [
    data(),
  ];
}
