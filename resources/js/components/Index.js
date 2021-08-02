import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import LogIn from "./LogIn";
import Register from "./Register";

function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Router>
                    <Route path="/register" component={Register} />
                </Router>
                <div className="col-md-8">
                </div>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}