import React from "react";
import { Switch } from "react-router-dom";

import { useCookies } from "react-cookie";
import CharacterContainer from "./Character/CharacterContainer";
import TalentMaterialContainer from "./Character/TalentMaterialContainer";
import PrivateRoute from "./PrivateRoute";
import LayoutService from "../_services/layout-service";

const Dashboard = ({ match }) => {
  const { path } = match;
  const [cookies, setCookies] = useCookies(["user"]);

  return (
    <div className="container">
      {React.createElement(LayoutService.navBar())}
      <br />
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2> Welcome, {cookies.auth.user.name} </h2>
          <Switch>
            <PrivateRoute path="/characters" component={CharacterContainer} />
            <PrivateRoute
              path="/talentMaterials"
              component={TalentMaterialContainer}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
