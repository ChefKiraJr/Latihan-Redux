import { GET_ALL_CARS } from '../actionTypes';

const initialState = {
  cars: [],
};

const getAllCarsReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_CARS) {
    return { ...state, cars: action.payload };
  }
  return state;
};

export default getAllCarsReducer;
