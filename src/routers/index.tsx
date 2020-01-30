import React from 'react';
// import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Register from '@pages/login/register'; // 基础
import Login from '@pages/login'; // 登录

export default () => (
  <HashRouter>
    <Switch>
      <Redirect from='/' to='/login' exact></Redirect>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  </HashRouter>
);
