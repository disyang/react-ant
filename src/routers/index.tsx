import React from 'react';
// import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '@pages/login/register'; // 基础
import Login from '@pages/login'; // 登录

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/1' component={Login} />
      <Route path='/' component={Register} />
    </Switch>
  </BrowserRouter>
);
