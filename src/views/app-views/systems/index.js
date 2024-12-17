import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import Loading from 'components/shared-components/Loading';

export const SystemsRoutes = () => {
  return (
    <Suspense fallback={<Loading cover="component"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/systems/settings`} component={lazy(() => import('./settings'))} />
        <Route path={`${APP_PREFIX_PATH}/systems/mobile-app`} component={lazy(() => import('./mobile-app'))} />
        <Route path={`${APP_PREFIX_PATH}/systems/logs`} component={lazy(() => import('./logs'))} />
        <Redirect from={`${APP_PREFIX_PATH}/systems`} to={`${APP_PREFIX_PATH}/systems/settings`} />
      </Switch>
    </Suspense>
  )
}

export default SystemsRoutes;
