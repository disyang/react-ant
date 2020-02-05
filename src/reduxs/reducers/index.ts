import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { loginCount, remember } from './login';
import { comment } from './commment';
import { manage } from './manage';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    loginCount,
    remember,
    comment,
    manage,
  }),
  compose(applyMiddleware(thunk))
);

// store.subscribe(() => console.log(store.getState()));

export default store;
