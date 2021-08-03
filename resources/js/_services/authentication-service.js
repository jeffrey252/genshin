import React, { useState } from 'react';
import http from "../http-common";

const register = data => {
    return http.post('/auth/signup', data);
}

const login = data => {
    return http.post('/auth/login', data);
}

const user = userAuth => {
    
    return http.get('/auth/user', {
        headers: {
            Authorization: userAuth.token_type + ' ' + userAuth.access_token
        }
    });
}

export default {
    register,
    login,
    user
};