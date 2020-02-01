import * as React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Register from '@pages/login/register'; // 注册
import Login from '@pages/login'; // 登录
import Home from '@pages/home'; // 登录

export default () => (
  <HashRouter>
    <Switch>
      <Redirect from='/' to='/login' exact></Redirect>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/home/:username' component={Home} />
    </Switch>
  </HashRouter>
);
