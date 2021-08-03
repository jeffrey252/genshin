import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCookies } from 'react-cookie';
import AuthenticationService from '../_services/authentication-service';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const initialUserState = {
        'email': '',
        'password': '',
    };

    const [user, setUser] = useState(initialUserState);
    const [cookies, setCookie] = useCookies(['auth']);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const history = useHistory();

    const loginUser = event => {
        event.preventDefault();

        var userData = {
            email: user.email,
            password: user.password,
        };

        AuthenticationService.login(userData)
            .then(response => {
                setCookie('auth', response.data, {
                    path: '/'
                });
                history.push('/home');
            });
    }


    return (
        <div className='card'>
            <div className='card-header'>Login</div>
            <div className='card-body'>
                <Form onSubmit={loginUser}>
                    <Form.Group className="mb-3" controlId="register.ControlInput1">
                        
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Email" /> 

                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={user.password} onChange={handleInputChange} placeholder="Password" /> 

                        <Button type="submit">Log In</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default Login;