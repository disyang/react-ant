import React from 'react';
// import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import app from '@pages/example'; // 基础

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={app} />
      <Route path='*' component={app} />
      <Redirect to='/discovery' />
    </Switch>
  </BrowserRouter>
);
