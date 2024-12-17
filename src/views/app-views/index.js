import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const MainRoutes = lazy(() => import('./main'));
const SystemsRoutes = lazy(() => import('./systems'));

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="page"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/main`} component={MainRoutes} />
        <Route path={`${APP_PREFIX_PATH}/systems`} component={SystemsRoutes} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/main`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);