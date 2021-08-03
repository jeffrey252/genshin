import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCookies } from 'react-cookie';
import useApi from "../_services/useApi";

import AuthenticationService from '../_services/authentication-service';

const Home = () => {

    const [cookies, setCookie] = useCookies(['user']);
    const [user, setUser] = useState({});

    useEffect(() => {
        //AuthenticationService.user();
    })

    return (
        <div className='row justify-content-center'>
            <div className='col-md-12'>
            <h2> Welcome, {cookies.auth.user.name} </h2>

            </div>
        </div>
    );
}

export default Home;