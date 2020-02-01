import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LoadingPage from '@components/LoadingPage';
import config from './config';
import { routerConfig } from './config'

const renderRoutes = (routes: Array<routerConfig>) => {

  return (
    <Switch>
      {routes.map((route, index) => {
        if (route.redirect) {
          return (
            <Redirect
              key={route.path || index}
              exact={route.exact}
              from={route.path}
              to={route.redirect}
            />
          );
        }
        return (
          <Route
            key={route.path || index}
            path={route.path}
            exact={route.exact}
            render={() => {
              const renderChildRoutes = renderRoutes(route.childRoutes || []);
              if (route.component) {
                return (
                  <Suspense fallback={<LoadingPage />}>
                    <route.component route={route}>{renderChildRoutes}</route.component>
                  </Suspense>
                );
              }
              return renderChildRoutes;
            }}
          />
        );
      })}
    </Switch>
  );
};

const AppRouter = () => {
  return <Router>{renderRoutes(config)}</Router>;
};

export default AppRouter;
