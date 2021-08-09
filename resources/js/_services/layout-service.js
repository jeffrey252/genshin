import CookiesService from "./cookie-service";

import AdminNavigation from "../components/Layouts/Navigation/AdminNavigation";
import PlayerNavigation from "../components/Layouts/Navigation/PlayerNavigation";
import LoggedOutNavigation from "../components/Layouts/LoggedOutNavigation";
import AdminDashboard from "../components/Dashboard";
import PlayerDashboard from "../components/Player/Dashboard";

const navBar = () => {
  let navBarMap = new Map([
    ["admin", AdminNavigation],
    ["player", PlayerNavigation],
    ["unauthenticated", LoggedOutNavigation],
  ]);
  return navBarMap.get(CookiesService.userType());
};

const dashboard = () => {
  let dashboardMap = new Map([
    ["admin", AdminDashboard],
    ["player", PlayerDashboard],
  ]);

  return dashboardMap.get(CookiesService.userType());
};
export default {
  navBar,
  dashboard,
};
