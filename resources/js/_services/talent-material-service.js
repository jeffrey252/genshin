import http from "../http-common";
import Cookies from 'universal-cookie';

const getAll = () => {
    const cookies = new Cookies();
    const auth = cookies.get('auth');
    return http.get("/talentMaterials", {
        headers: {
            Authorization: auth.token_type + ' ' + auth.access_token
        }
    });
}

export default {
    getAll,
};