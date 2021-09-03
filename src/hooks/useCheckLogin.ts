// @ts-nocheck
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';

export const useCheckLogin = () => {
    const userState = useContext(UserContext);
    if (!getFromLocalStorage('token')) {
        console.log(getFromLocalStorage('token'));
        console.log('нет токена');
        userState.setLoginState(false);

        return false;
    }
    console.log(getFromLocalStorage('token'));
    console.log('есть токен');
    userState.setLoginState(true);

    return true;
};
