import { lazy } from 'react';

export interface routerConfig {
  path: string;
  exact?: boolean;
  redirect?: string;
  component?: any;
  name?: string;
  childRoutes?: Array<routerConfig>;
}

const config: Array<routerConfig> = [
  {
    path: '/',
    exact: true,
    redirect: '/login'
  },
  {
    path: '/login',
    name: '登录页',
    component: lazy(() => import('@pages/login'))
  },
  {
    path: '/register',
    name: '注册页',
    component: lazy(() => import('@pages/login/register'))
  },
  {
    path: '/home',
    component: lazy(() => import('@pages/home')),
    childRoutes: [
      {
        path: '/welcome',
        name: '欢迎页',
        component: lazy(() => import('@pages/home'))
      }
    ]
  },
  {
    path: '/exception',
    name: '异常页',
    childRoutes: [
      {
        path: '/exception/403',
        name: '403',
        component: lazy(() => import('@pages/exception/403'))
      },
      {
        path: '/exception/404',
        name: '404',
        exact: true,
        component: lazy(() => import('@pages/exception/404'))
      },
      {
        path: '/exception/500',
        name: '500',
        component: lazy(() => import('@pages/exception/500'))
      }
    ]
  },
  {
    path: '*',
    exact: true,
    redirect: '/exception/404'
  }
];

export default config;
