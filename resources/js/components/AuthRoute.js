import React from "react";
import { Route, Redirect } from "react-router-dom";
import CookiesService from "../_services/cookie-service";

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      CookiesService.isLoggedIn() ? (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default AuthRoute;
