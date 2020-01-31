import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { loginCount, remember } from './login';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    loginCount,
    remember
  }),
  compose(applyMiddleware(thunk))
);

store.subscribe(() => console.log(store.getState()));

export default store;
