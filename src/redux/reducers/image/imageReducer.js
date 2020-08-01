import { types } from './imageTypes';

const INIT_STATE = {
  image: null,
};

export const imageReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.ADD_IMAGE:
      return {
        ...state,
        image: action.payload,
      };

    default:
      return state;
  }
};
