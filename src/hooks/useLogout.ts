/* Core */
import { useDispatch } from 'react-redux';
import { setUserToken } from '../lib/redux/init/actions';
import { api } from '../api';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';

export const useLogout = () => {
    const token = getFromLocalStorage('token');
    const dispatch = useDispatch();

    localStorage.removeItem('token');
    dispatch(setUserToken(' '));

    return api.logout(token);
};
