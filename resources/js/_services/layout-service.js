import CookiesService from './cookie-service';

import AdminNavigation from "../components/Layouts/Navigation/AdminNavigation";
import PlayerNavigation from "../components/Layouts/Navigation/PlayerNavigation";
import LoggedOutNavigation from "../components/Layouts/LoggedOutNavigation";

const navBar = () => {
    let navBarMap = new Map([
        ['admin', AdminNavigation],
        ['player', PlayerNavigation],
        ['unauthenticated', LoggedOutNavigation]
    ]);
    console.log(CookiesService.userType());
    return navBarMap.get(CookiesService.userType());
} 

export default {
    navBar
};