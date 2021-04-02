import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './client/pages/Home';
import Login from './client/pages/Login';
import Register from './client/pages/Register';
import LoginRestaurant from './restaurant/pages/Login';
import RegisterRestaurant from './restaurant/pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                {/*Restaurant routes*/}
                <Route path="/restaurant/register" component={RegisterRestaurant}/>
                <Route path="/restaurant/login" component={LoginRestaurant}/>
            </Switch>
        </BrowserRouter>
    )
}
