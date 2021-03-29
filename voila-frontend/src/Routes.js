import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './client/pages/Home';
import Login from './client/pages/Login';
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}