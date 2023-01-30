import { SET_LOGIN } from '../actionTypes';

export const setLogin = (user) => {
  return {
    type: SET_LOGIN,
    payload: user,
  };
};
