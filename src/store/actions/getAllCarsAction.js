import axios from 'axios';
import { GET_ALL_CARS } from '../actionTypes';

// export const getAllCars = (input) => {
//   return {
//     type: GET_ALL_CARS,
//     payload: input,
//   };
// };

export const fetchData = async (dispatch) => {
  try {
    const { data } = await axios.get(
      'https://bootcamp-rent-cars.herokuapp.com/customer/car/'
    );
    dispatch(getAllCars(data));
  } catch (err) {
    console.log(err);
  }
};

export const getAllCars = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        'https://bootcamp-rent-cars.herokuapp.com/customer/car/'
      );
      dispatch({ type: GET_ALL_CARS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
