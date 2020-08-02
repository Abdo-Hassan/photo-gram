import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';

const middlewares = [logger, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
