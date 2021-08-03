import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import Register from "./Register";
import Login from './Login';
import Home from './Home';

function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Router>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                </Router>
                <div className="col-md-8">
                </div>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(
        <CookiesProvider>
            <Index />
        </CookiesProvider>, document.getElementById('index')
    );
}