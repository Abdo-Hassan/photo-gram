import { combineReducers } from 'redux';
import { authReducer } from './reducers/auth/authReducer';
import { imageReducer } from './reducers/image/imageReducer';

export const rootReducer = combineReducers({
  userAuth: authReducer,
  userImage: imageReducer,
});
