/* Core */
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { api } from '../api';

export const useSignup = () => {
    const client = useQueryClient();
    const navigate = useNavigate();

    const mutation = useMutation(
        (credentials) => {
            return api.signup(credentials);
        },
        {
            onError() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                console.log('Ошибка в процессе регистрации пользователя'); // eslint-disable-line
            },
            onSuccess() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                navigate('/task-manager');
            },
            onSettled() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                client.invalidateQueries('/auth/signup');
            },
        },
    );

    return mutation;
};
