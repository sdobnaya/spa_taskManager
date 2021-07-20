/* Core */
import { api } from '../api';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';

export const useLogout = () => {
    const token = getFromLocalStorage('token');
    console.log('useLogout0', token);
    console.log('useLogout1', localStorage.getItem('token'));
    localStorage.removeItem('token');
    console.log('useLogout2', localStorage.getItem('token'));

    return api.logout(token);
};
