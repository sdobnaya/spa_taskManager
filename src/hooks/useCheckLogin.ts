// @ts-nocheck
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';

export const useCheckLogin = () => {
    const userState = useContext(UserContext);
    if (!getFromLocalStorage('token')) {
        userState.setLoginState(false);

        return false;
    }
    userState.setLoginState(true);

    return true;
};
