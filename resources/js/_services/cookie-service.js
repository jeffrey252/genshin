import Cookies from "universal-cookie";

const getAuthAccess = () => {
  const cookies = new Cookies();
  return cookies.get("auth");
};

const logout = () => {
  const cookies = new Cookies();
  cookies.remove("auth");
};

const isLoggedIn = () => {
  const cookies = new Cookies();
  return cookies.get("auth") !== undefined;
};

const isPlayer = () => {
  const cookies = new Cookies();
  return cookies.get("auth").role == "player";
};

const userType = () => {
  const cookies = new Cookies();
  return cookies.get("auth") !== undefined
    ? cookies.get("auth").role
    : "unauthenticated";
};

export default {
  getAuthAccess,
  logout,
  isLoggedIn,
  isPlayer,
  userType,
};
