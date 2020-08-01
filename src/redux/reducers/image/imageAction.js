import { types } from './imageTypes';

export const addImage = (file) => ({
  type: types.ADD_IMAGE,
  payload: file,
});
