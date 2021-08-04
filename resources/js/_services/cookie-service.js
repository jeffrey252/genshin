import Cookies from 'universal-cookie';

const getAuthAccess = () => {
    const cookies = new Cookies();
    return cookies.get('auth');
};

export default {
    getAuthAccess,
}