import types from './authTypes';
import { auth, googleProvider, createUserRecord } from '../../../firebase';

export const signInAuth = (userAuth, displayName) => {
  return async (dispatch) => {
    try {
      const userRef = await createUserRecord(userAuth, displayName);
      const userSnapshot = await userRef.get();
      dispatch(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
      dispatch(signInError(error));
    }
  };
};

export const googleSignIn = () => {
  return (dispatch) => {
    try {
      auth.signInWithPopup(googleProvider).then((user) => {
        const userAuth = user.user;
        const displayName = user.user.displayName;
        dispatch(signInAuth(userAuth, displayName));
      });
    } catch (error) {
      dispatch(signInError(error.message));
    }
  };
};

export const signInSuccess = (user) => ({
  type: types.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInError = (error) => ({
  type: types.SIGN_IN_ERROR,
  payload: error,
});
