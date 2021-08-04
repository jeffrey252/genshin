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

const get = id => {
    const auth = CookiesService.getAuthAccess();
    return http.get("/talentMaterials/"+id, {
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

const update = data => {
    const auth = CookiesService.getAuthAccess();
    return http.put('/talentMaterials/'+data.id, data, {
        headers: {
            Authorization: auth.token_type + ' ' + auth.access_token
        }
    });
}

const destroy = id => {
    const auth = CookiesService.getAuthAccess();
    return http.delete('/talentMaterials/'+id, {
        headers: {
            Authorization: auth.token_type + ' ' + auth.access_token
        }
    });
}
export default {
    get,
    getAll,
    create,
    update,
    destroy,
};