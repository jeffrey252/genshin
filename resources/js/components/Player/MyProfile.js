import React from "react";
import { Switch } from "react-router-dom";

import { useCookies } from 'react-cookie';
import Navigation from "./Navigation";
import PrivateRoute from './PrivateRoute';

const Home = ( { match }) => {

    const { path } = match;
    const [cookies, setCookies] = useCookies(['user']);

    return (
        <div className="container">
            <Navigation />
            <br />
            <div className="row justify-content-center">
                <div className='col-md-12'>
                    <h2> Welcome, {cookies.auth.user.name} </h2>
                    <Switch>
                        <PrivateRoute path="/characters" component={CharacterContainer} />
                        <PrivateRoute path="/talentMaterials" component={TalentMaterialContainer} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Home;