import React, {lazy, useCallback} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import Routes from '@routers/index';
import store from '@reduxs/reducers';

const HotRoutes = hot(Routes);

ReactDOM.render(
  <Provider store={store}>
    <HotRoutes />
  </Provider>,
  document.getElementById('root')
);
