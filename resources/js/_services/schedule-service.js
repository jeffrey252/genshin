import http from "../http-common";
import CookiesService from "./cookie-service";

const getAll = () => {
  const auth = CookiesService.getAuthAccess();
  return http.get("/schedules", {
    headers: {
      Authorization: auth.token_type + " " + auth.access_token,
    },
  });
};

export default {
  getAll,
};
