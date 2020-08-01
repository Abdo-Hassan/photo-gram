import { combineReducers } from 'redux';
import { authReducer } from './reducers/auth/authReducer';
import { imagesReducer } from './reducers/images/imagesReducer';

export const rootReducer = combineReducers({
  userAuth: authReducer,
  userImages: imagesReducer,
});
