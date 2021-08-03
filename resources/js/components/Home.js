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

    AuthenticationService.user()
        .then(response => {
            setUser(response.data)
        });

    return (
        <div className='card'>
            <div className='card-header'>Welcome, {cookies.auth.user.name}</div>
            <div className='card-body'>
            </div>
        </div>
    );
}

export default Home;