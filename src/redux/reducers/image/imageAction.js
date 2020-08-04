import types from './imageTypes';
import { firestore } from '../../../firebase';

export const addImage = (file) => ({
  type: types.ADD_IMAGE,
  payload: file,
});

export const getImagesError = (error) => ({
  type: types.GET_IMAGES_ERROR,
  payload: error,
});

export const getImagesSuccuess = (images) => ({
  type: types.GET_IMAGES,
  payload: images,
});

export const getImages = () => {
  return async (dispatch) => {
    try {
      firestore
        .collection('images')
        .orderBy('createdAt', 'desc')
        .onSnapshot((snapshot) => {
          let documents = [];
          snapshot.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          dispatch(getImagesSuccuess(documents));
        });
    } catch (error) {
      dispatch(getImagesError(error));
    }
  };
};

export const getSelectedImage = (image) => ({
  type: types.GET_SELECTED_IMAGE,
  payload: image,
});
export const hideSelectedImage = () => ({
  type: types.HIDE_SELECTED_IMAGE,
});
