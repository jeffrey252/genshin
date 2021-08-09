import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";

import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";

import Register from "./Register";
import Login from "./Login";

import LayoutService from "../_services/layout-service";

function Index() {
  return (
    <Switch>
      <AuthRoute path="/register" component={Register} />
      <AuthRoute path="/login" component={Login} />
      <PrivateRoute path="/" component={LayoutService.dashboard()} />
    </Switch>
  );
}

export default Index;

if (document.getElementById("index")) {
  ReactDOM.render(
    <BrowserRouter>
      <Index />
    </BrowserRouter>,
    document.getElementById("index")
  );
}
