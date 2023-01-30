import { SET_LOGIN } from '../actionTypes';

const initialState = {
  users: [],
};

const loginReducer = (state = initialState, action) => {
  if (action.type === SET_LOGIN) {
    console.log(action.payload);
    return {
      ...state,
      users: [...state.users, action.payload],
    };
  }
  return state;
};

export default loginReducer;
