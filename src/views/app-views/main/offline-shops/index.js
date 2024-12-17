import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import Adresses from "./adresses";
import Geofences from "./geofences";


const OfflineShops = () => {
    return (
        <Switch>
            {/* Nested Routes */}
            <Route path={`${APP_PREFIX_PATH}/main/offline-shops/adresses`} component={Adresses} />
            <Route path={`${APP_PREFIX_PATH}/main/offline-shops/geofences`} component={Geofences} />
            
            {/* Default Redirect to Adresses */}
            <Redirect from={`${APP_PREFIX_PATH}/main/offline-shops`} to={`${APP_PREFIX_PATH}/main/offline-shops/adresses`} />
        </Switch>
    )
}

export default OfflineShops;