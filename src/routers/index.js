import React from 'react'
import { Router, Route, IndexRoute, hashHistory/* , Redirect */ } from 'react-router'
import app from '@pages/example' // 基础

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={app}>
      <IndexRoute component={app} />
    </Route>
    <Route path="/login" component={app} />
    <Route path="*" component={app} />
  </Router>
)