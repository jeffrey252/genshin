import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCookies } from 'react-cookie';
import CharacterList from "./CharacterList";
import PrivateRoute from "../PrivateRoute";
import LayoutService from "../../_services/layout-service";
import CharacterService from '../../_services/character-service'; 

const Dashboard = ( { match }) => {

    const { path } = match;
    const [cookies, setCookies] = useCookies(['user']);
    const [value, setValue] = useState({});
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
      //getPlayerCharacters();

    }, [])

    function test() {
        CharacterService.addCharacterToPlayer(value.id);
    }
    
    return (
        <div className="container">
            {
                React.createElement(LayoutService.navBar())
            }
            <br />
            <br />
            <div className="row justify-content-center">
                <div className='col-md-12'>
                    <h2> Welcome, {cookies.auth.user.name} to your Dashboard</h2>
                    <br />
                    <Switch>
                        <PrivateRoute path="/characters" component={CharacterList} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;