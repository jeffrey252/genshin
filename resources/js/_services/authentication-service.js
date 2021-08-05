import http from "../http-common";
import CookiesService from './cookie-service';

const register = data => {
    return http.post('/auth/signup', data);
}

const login = data => {
    return http.post('/auth/login', data);
}

const logout = () => {
    const auth = CookiesService.getAuthAccess();
    return http.get('/auth/logout', {
        headers: {
            Authorization: auth.token_type + ' ' + auth.access_token
        }
    })
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
    user,
    logout,
};