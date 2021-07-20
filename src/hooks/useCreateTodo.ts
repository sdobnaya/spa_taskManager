/* Core */
import { useMutation, useQueryClient } from 'react-query';
// import { useNavigate } from 'react-router-dom';

import { api } from '../api';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';


export const useCreate = () => {
    const client = useQueryClient();
    // const navigate = useNavigate();
    const token = getFromLocalStorage('token');
    console.log(token);

    const mutation = useMutation(
        (credentials: any) => {
            return api.createTodo(token, credentials);
        },
        {
            onError() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                console.log('Ошибка в процессе создания задачи');
            },
            onSuccess() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                // navigate('/task-manager');
                console.log('URRRA');
            },
            onSettled() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                client.invalidateQueries('/tasks');
            },
        },
    );

    return mutation;
};
