import http from "../http-common";

const register = data => {
    return http.post('/auth/signup', data);
}

export default {
    register,
};