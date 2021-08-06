import http from "../http-common";
import CookiesService from './cookie-service';

const get = id => {
    const auth = CookiesService.getAuthAccess();
    return http.get("/characters/"+id, {
        headers: {
            Authorization: auth.token_type + ' ' + auth.access_token
        }
    });
}

const getAll = () => {
    const auth = CookiesService.getAuthAccess();
    return http.get("/characters", {
        headers: {
            Authorization: auth.token_type + ' ' + auth.access_token
        }
    });
}

const create = data => {
    const auth = CookiesService.getAuthAccess();
    return http.post('/characters', data, {
        headers: {
            Authorization: auth.token_type + ' ' + auth.access_token
        }
    });
}

const update = data => {
    const auth = CookiesService.getAuthAccess();
    return http.put('/characters/'+data.id, data, {
        headers: {
            Authorization: auth.token_type + ' ' + auth.access_token
        }
    });
}

const destroy = id => {
    const auth = CookiesService.getAuthAccess();
    return http.delete('/characters/'+id, {
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