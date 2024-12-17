import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import CustomerList from "./customer-list";
import CustomerGroups from "./customer-groups";

const Customers = () => {

    return (
        <Switch>
            <Route path={`${APP_PREFIX_PATH}/main/customers/customer-list`} component={CustomerList} />
            <Route path={`${APP_PREFIX_PATH}/main/customers/customer-groups`} component={CustomerGroups} />
            <Redirect from={`${APP_PREFIX_PATH}/main/customers`} to={`${APP_PREFIX_PATH}/main/customers/customer-list`} />
        </Switch>
    )
}

export default Customers;