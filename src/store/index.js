import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AppframeStore } from 'wt-frame/lib/components/Module';
import reducers from '../reducers';
import rootSaga from '../sagas';

const initStore = () => {
  const sagaMiddleware = createSagaMiddleware({
    emitter: emit => (action) => {
      if (action.toAppFrame) {
        AppframeStore.dispatch(action);
        return;
      }

      emit(action);
    },
  });
  /* eslint-disable no-underscore-dangle */
  // because of http://zalmoxisus.github.io/redux-devtools-extension/#1.1-basic-store
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable no-underscore-dangle */

  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
      ),
    ),
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default initStore();
