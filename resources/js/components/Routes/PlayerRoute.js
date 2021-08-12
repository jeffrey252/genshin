import React from "react";
import { Route, Redirect } from "react-router-dom";
import CookiesService from "../_services/cookie-service";

const PlayerRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      CookiesService.isPlayer() ? (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PlayerRoute;
