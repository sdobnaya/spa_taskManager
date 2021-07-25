// @ts-nocheck
// /* Core */
import { useDispatch } from 'react-redux';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';
import { setUserToken } from '../lib/redux/init/actions';

export const useAutoAuthorization = () => {
    const dispatch = useDispatch();
    const token = getFromLocalStorage('token');

    return token === null ? null : dispatch(setUserToken(token));
};

