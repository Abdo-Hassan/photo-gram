import types from './authTypes';
const INIT_STATE = {
  currentUser: null,
  isAuthenticated: false,
  userError: null,
};

export const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        userError: null,
      };

    case types.SIGN_IN_ERROR:
      return {
        ...state,
        currentUser: null,
        userError: action.payload,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
