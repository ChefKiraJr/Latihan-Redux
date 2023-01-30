import { SET_COUNT } from '../actionTypes';

export const setCount = (input) => {
  return {
    type: SET_COUNT,
    payload: input,
  };
};
