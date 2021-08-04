import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import Navigation from "./Navigation";

import Register from "./Register";
import Login from './Login';
import Home from './Home';
import CharacterContainer from './Character/CharacterContainer';

function Index() {
    return (
        <div className="container">
        <Navigation />

            <div className="row justify-content-center">
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/characters" component={CharacterContainer} />
                </Switch>
                <div className="col-md-8">
                </div>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(
        <CookiesProvider><BrowserRouter>
            <Index />
            </BrowserRouter></CookiesProvider>, document.getElementById('index')
    );
}