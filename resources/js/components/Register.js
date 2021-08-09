import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import AuthenticationService from '../_services/authentication-service';
import Navigation from "./Navigation";

const Register = () => {

    const initialUserState = {
        'name': '',
        'email': '',
        'password': '',
        'passwordConfirmation': '',
    };

    const [user, setUser] = useState(initialUserState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const registerUser = event => {
        event.preventDefault();

        var userData = {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.passwordConfirmation,
        };

        AuthenticationService.register(userData)
            .then(response => {
                console.log(response);
            });
    }


    return (
        <div className="container">
            <Navigation />
            <br />
            <div className='card'>
                <div className='card-header'>Register</div>
                <div className='card-body'>
                    <Form onSubmit={registerUser}>
                        <Form.Group className="mb-3" controlId="register.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Name" /> 
                            
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Email" /> 

                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={user.password} onChange={handleInputChange} placeholder="Password" /> 

                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="passwordConfirmation" value={user.passwordConfirmation} onChange={handleInputChange} placeholder="Confirm Password" /> 
                            <Button type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Register;