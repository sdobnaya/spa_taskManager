/* Core */

import { api } from '../api';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';

export const useLogout = () => {
    const token = getFromLocalStorage('token');

    localStorage.removeItem('token');

    return api.logout(token);
};
