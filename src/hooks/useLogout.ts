/* Core */
// import { useMutation, useQueryClient } from 'react-query';
// import { useNavigate } from 'react-router-dom';

import { api } from '../api';
import { useToGetFromLocalStorage } from './useToGetFromLocalStorage';

export const useLogout = () => {
    const token = useToGetFromLocalStorage('token');

    localStorage.removeItem('token');

    return api.logout(token);
};
