import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import AuthenticationService from './authentication-service';

function useApi () {
    const [apiData, setApiData] = useState({});
    const [cookies, setCookies] = useCookies(['auth']);

    useEffect (() => {
    })

}

export default useApi