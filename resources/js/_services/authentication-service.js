import http from "../http-common";
import { useCookies } from 'react-cookie';

const register = data => {
    return http.post('/auth/signup', data);
}

const login = data => {
    return http.post('/auth/login', data);
}

const user = () => {
    const [cookies, setCookies] = useCookies(['auth']);
    return http.get('/auth/user', {
        headers: {
            Authorization: cookies.auth.token_type + ' ' + cookies.auth.access_token
        }
    });
}

export default {
    register,
    login,
    user
};