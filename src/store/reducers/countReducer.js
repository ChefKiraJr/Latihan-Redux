import { SET_COUNT } from '../actionTypes';

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  if (action.type === SET_COUNT) {
    return { ...state, count: state.count + action.payload };
  }
  return state;
};

export default countReducer;
