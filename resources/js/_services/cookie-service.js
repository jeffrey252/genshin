import Cookies from 'universal-cookie';

const getAuthAccess = () => {
    const cookies = new Cookies();
    return cookies.get('auth');
};

const logout = () => {
    const cookies = new Cookies();
    cookies.remove('auth');
}

const isLoggedIn = () => {
    const cookies = new Cookies();
    return cookies.get('auth') !== undefined;
}

export default {
    getAuthAccess,
    logout,
    isLoggedIn,
}