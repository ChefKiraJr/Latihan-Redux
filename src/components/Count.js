import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '../store/actions/countAction';
import { setLogin } from '../store/actions/loginAction';
import { fetchData, getAllCars } from '../store/actions/getAllCarsAction';

const Count = () => {
  const [input, setInput] = useState({
    username: '',
    age: '',
    password: '',
  });
  // const [data, setData] = useState([]);
  const { count } = useSelector((state) => state.count);
  const { users } = useSelector((state) => state.login);
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let temp = { ...input };
    temp[e.target.name] = e.target.value;
    setInput(temp);
  };
  const handleSubmit = () => {
    dispatch(setLogin(input));
    let temp = {
      username: '',
      age: '',
      password: '',
    };
    setInput(temp);
  };
  // const fetchData = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       'https://bootcamp-rent-cars.herokuapp.com/customer/car/'
  //     );
  //     console.log(data);
  //     dispatch(getAllCars(data));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  console.log(users);
  console.log(cars);
  return (
    <>
      <div>
        <button onClick={() => dispatch(setCount(-1))}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(setCount(1))}>+</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={input.username}
          onChange={(event) => handleChange(event)}
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          value={input.age}
          onChange={(event) => handleChange(event)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={input.password}
          onChange={(event) => handleChange(event)}
        />
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </>
  );
};

export default Count;
