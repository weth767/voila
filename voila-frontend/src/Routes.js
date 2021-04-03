import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './client/pages/Home';
import Login from './client/pages/Login';
import Register from './client/pages/Register';
import LoginRestaurant from './restaurant/pages/Login';
import RegisterRestaurant from './restaurant/pages/Register';
import ResetPassword from './client/pages/ResetPassword';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/*Client routes*/}
                <Route path="/client/home" component={Home}/>
                <Route path="/client/login" component={Login}/>
                <Route path="/client/register" component={Register}/>
                <Route path="/client/recovery" component={ResetPassword}/>
                {/*Restaurant routes*/}
                <Route path="/restaurant/register" component={RegisterRestaurant}/>
                <Route path="/restaurant/login" component={LoginRestaurant}/>
            </Switch>
        </BrowserRouter>
    )
}
