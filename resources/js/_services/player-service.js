import http from "../http-common";
import CookiesService from "./cookie-service";

const getAll = (userId) => {
  const auth = CookiesService.getAuthAccess();
  return http.get("/playerCharacters/" + userId, {
    headers: {
      Authorization: auth.token_type + " " + auth.access_token,
    },
  });
};

const create = (userId, character) => {
  const auth = CookiesService.getAuthAccess();
  const data = {
    user_id: userId,
    character_id: character.id,
  };
  return http.post("/playerCharacters/", data, {
    headers: {
      Authorization: auth.token_type + " " + auth.access_token,
    },
  });
};
export default {
  getAll,
  create,
};
