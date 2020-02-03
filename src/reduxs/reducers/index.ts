import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { loginCount, remember } from './login';
import { comment } from './commment';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    loginCount,
    remember,
    comment,
  }),
  compose(applyMiddleware(thunk))
);

// store.subscribe(() => console.log(store.getState()));

export default store;
