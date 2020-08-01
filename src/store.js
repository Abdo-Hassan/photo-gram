import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';

const middlewares = [logger, thunk];

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);