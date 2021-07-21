/* Core */
import { useMutation, useQueryClient } from 'react-query';

import { api } from '../api';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';


export const useCreate = () => {
    const client = useQueryClient();

    const token = getFromLocalStorage('token');

    const body = {
        completed: true,
        title: 'Выучить JavaScript',
        description: 'Что бы стать успешным разработчиком нужно подтянуть JS и ES6',
        deadline: '2022-07-21T14:12:22.174Z',
        tag: 'e04358c2-4afc-4577-8ff6-9e8ddd4f406a',
    };

    const mutation = useMutation(
        (credentials: any) => {
            return api.createTodo(token, body);
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
