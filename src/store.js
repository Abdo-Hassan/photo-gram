import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';

const middlewares = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
