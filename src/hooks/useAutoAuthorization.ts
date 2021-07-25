// @ts-nocheck
// /* Core */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';
import { setUserToken } from '../lib/redux/init/actions';

export const useAutoAuthorization = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = getFromLocalStorage('token');

    console.log(123);

    return token === null ? console.log('``````') : dispatch(setUserToken(token));
};
// export const a = () => { console.log(''); };
