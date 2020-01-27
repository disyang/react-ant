import React from 'react';
// import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import app from '@pages/example'; // 基础
import Login from '@pages/login'; // 登录

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Login} />
    </Switch>
  </BrowserRouter>
);
