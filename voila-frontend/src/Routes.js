import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './client/pages/Home';
import Login from './client/pages/Login';
import Register from './client/pages/Register';
import ResetPassword from './client/pages/ResetPassword';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/client/login" component={Login}/>
                <Route path="/client/register" component={Register}/>
                <Route path="/client/recovery" component={ResetPassword}/>
            </Switch>
        </BrowserRouter>
    )
}
