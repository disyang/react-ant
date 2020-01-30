import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { loginCount } from './login';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    loginCount
  }),
  compose(applyMiddleware(thunk))
);

store.subscribe(() => console.log(store.getState()));

export default store;
