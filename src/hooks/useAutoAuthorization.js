// @ts-nocheck
// /* Core */
import { useDispatch } from 'react-redux';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';
import { setUserToken } from '../lib/redux/init/actions';

let isSynchronized = false;

export const useAutoAuthorization = () => {
    const dispatch = useDispatch();
    const token = getFromLocalStorage('token');

    if (token !== null && !isSynchronized) {
        dispatch(setUserToken(token));
        isSynchronized = true;
    }
};

