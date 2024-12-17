import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loading cover="component"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/main/dashboard`} component={lazy(() => import('./dashboard'))} />
        <Route path={`${APP_PREFIX_PATH}/main/catalog`} component={lazy(() => import('./catalog'))} />
        <Route path={`${APP_PREFIX_PATH}/main/orders`} component={lazy(() => import('./orders'))} />
        <Route path={`${APP_PREFIX_PATH}/main/customers`} component={lazy(() => import('./customers'))} />
        <Route path={`${APP_PREFIX_PATH}/main/banners`} component={lazy(() => import('./banners'))} />
        <Route path={`${APP_PREFIX_PATH}/main/promocodes`} component={lazy(() => import('./promocodes'))} />
        <Route path={`${APP_PREFIX_PATH}/main/offline-shops`} component={lazy(() => import('./offline-shops'))} />
        <Route path={`${APP_PREFIX_PATH}/main/employees`} component={lazy(() => import('./employees'))} />
        <Route path={`${APP_PREFIX_PATH}/main/mailings`} component={lazy(() => import('./mailings'))} />
        <Redirect from={`${APP_PREFIX_PATH}/main`} to={`${APP_PREFIX_PATH}/main/dashboard`} />
      </Switch>
    </Suspense>
  );
};

export default MainRoutes;

