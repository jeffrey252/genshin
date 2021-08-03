import http from "../http-common";

const getAll = () => {
    return http.get("/talentMaterials");
}

export default {
    getAll,
};