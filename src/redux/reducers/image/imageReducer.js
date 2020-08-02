import { types } from './imageTypes';

const INIT_STATE = {
  image: null,
  images: null,
  imagesError: null,
  selectedImage: null,
};

export const imageReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.ADD_IMAGE:
      return {
        ...state,
        image: action.payload,
      };

    case types.GET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };

    case types.GET_IMAGES_ERROR:
      return {
        ...state,
        imagesError: action.payload,
      };

    case types.GET_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: action.payload,
      };

    case types.HIDE_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: null,
      };

    default:
      return state;
  }
};
