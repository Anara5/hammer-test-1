import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Products from './products';
import Categories from './categories';
import Collections from './collections';
import Combo from './combo';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const Catalog = () => {
    return (
        <Switch>
            {/* Nested Routes */}
            <Route path={`${APP_PREFIX_PATH}/main/catalog/products`} component={Products} />
            <Route path={`${APP_PREFIX_PATH}/main/catalog/categories`} component={Categories} />
            <Route path={`${APP_PREFIX_PATH}/main/catalog/collections`} component={Collections} />
            <Route path={`${APP_PREFIX_PATH}/main/catalog/combo`} component={Combo} />
            
            {/* Default Redirect to Products */}
            <Redirect from={`${APP_PREFIX_PATH}/main/catalog`} to={`${APP_PREFIX_PATH}/main/catalog/products`} />
        </Switch>
    );
};

export default Catalog;
