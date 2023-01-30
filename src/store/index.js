import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import countReducer from './reducers/countReducer';
import loginReducer from './reducers/loginReducer';
import getAllCarsReducer from './reducers/getAllCarsReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  count: countReducer,
  login: loginReducer,
  cars: getAllCarsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
