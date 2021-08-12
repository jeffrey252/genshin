import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { useCookies } from "react-cookie";
import CharacterList from "./CharacterList";
import PrivateRoute from "../Routes/PrivateRoute";
import LayoutService from "../../_services/layout-service";

const Dashboard = ({ match }) => {
  const { path } = match;
  const [cookies, setCookies] = useCookies(["user"]);
  const [value, setValue] = useState({});
  const [characters, setCharacters] = useState([]);

  return (
    <div className="container">
      {React.createElement(LayoutService.navBar())}
      <br />
      <br />
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2> Welcome, {cookies.auth.user.name} to your Dashboard</h2>
          <br />
          <Switch>
            <PrivateRoute path="/characters" component={CharacterList} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
