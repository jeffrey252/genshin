import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';

const Home = () => {

    const [cookies, setCookie] = useCookies(['user']);
    const [user, setUser] = useState({});

    return (
        <div className='row justify-content-center'>
            <div className='col-md-12'>
            <h2> Welcome, {cookies.auth.user.name} </h2>

            </div>
        </div>
    );
}

export default Home;