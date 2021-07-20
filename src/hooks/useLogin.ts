/* Core */
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { api } from '../api';


export const useLogin = () => {
    const client = useQueryClient();
    const navigate = useNavigate();

    const mutation = useMutation(
        (credentials: any) => {
            return api.login(credentials);
        },
        {
            onError() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                console.log('Ошибка в процессе логина пользователя');
            },
            onSuccess() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                // userState.toggle(userState.loggedIn); - убрать?
                navigate('/task-manager');
            },
            onSettled() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                client.invalidateQueries('/auth/login');
            },
        },
    );

    return mutation;
};
