import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './client/pages/Home';
import Login from './client/pages/Login';
import Register from './client/pages/Register';
import LoginRestaurant from './restaurant/pages/Login';
import RegisterRestaurant from './restaurant/pages/Register';
import ResetPassword from './client/pages/ResetPassword';
import Orders from "./client/pages/Orders";
import Finances from "./restaurant/pages/Finances";
import Restaurant from "./client/pages/Restaurant";
import HomeRestaurant from './restaurant/pages/Home';
import CategoryRestaurant from './restaurant/pages/Category/list';
import CategoryCreateRestaurant from './restaurant/pages/Category/new';
import ExtraRestaurant from './restaurant/pages/Extra/list';
import ExtraCreateRestaurant from './restaurant/pages/Extra/new';
import DeliveryPerson from "./restaurant/pages/DeliveryPerson";
import ItemNew from "./restaurant/pages/Item/new";
import ItemList from "./restaurant/pages/Item/list";
import OrderStatus from "./restaurant/pages/OrderStatus";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/*Client routes*/}
                <Route path="/" exact component={Home}/>
                <Route path="/client/home" component={Home}/>
                <Route path="/client/login" component={Login}/>
                <Route path="/client/register" component={Register}/>
                <Route path="/client/recovery" component={ResetPassword}/>
                <Route path="/client/orders" component={Orders}/>
                <Route path="/client/restaurant/:id" component={Restaurant}/>
                {/*Restaurant routes*/}
                <Route path="/restaurant/register" component={RegisterRestaurant}/>
                <Route path="/restaurant/login" component={LoginRestaurant}/>
                <Route path="/restaurant/home" component={HomeRestaurant}/>
                <Route path="/restaurant/category" component={CategoryRestaurant}/>
                <Route path="/restaurant/category-new" component={CategoryCreateRestaurant}/>
                <Route path="/restaurant/extra" component={ExtraRestaurant}/>
                <Route path="/restaurant/extra-new" component={ExtraCreateRestaurant}/>
                <Route path="/restaurant/item" component={ItemList}/>
                <Route path="/restaurant/item-new" component={ItemNew}/>
                <Route path="/restaurant/orders" component={Orders}/>
                <Route path="/restaurant/finances" component={Finances}/>
                <Route path="/restaurant/deliverypersons" component={DeliveryPerson}/>
                <Route path="/restaurant/orderstatus/:orderId" component={OrderStatus}/>
            </Switch>
        </BrowserRouter>
    )
}
