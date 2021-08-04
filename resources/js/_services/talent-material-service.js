import http from "../http-common";
import CookiesService from './cookie-service';

const getAll = () => {
    const auth = CookiesService.getAuthAccess();
    return http.get("/talentMaterials", {
        headers: {
            Authorization: auth.token_type + ' ' + auth.access_token
        }
    });
}

const create = data => {
    const auth = CookiesService.getAuthAccess();
    return http.post('/talentMaterials', data, {
        headers: {
            Authorization: auth.token_type + ' ' + auth.access_token
        }
    });
}

export default {
    getAll,
    create
};