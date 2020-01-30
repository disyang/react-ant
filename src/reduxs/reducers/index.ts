import { combineReducers, createStore } from 'redux';
import { loginCount } from './login';

const store = createStore(
  combineReducers({
    loginCount
  })
);

store.subscribe(() => console.log(store.getState()));

export default store;
