// @ts-nocheck
import { useMutation, useQueryClient } from 'react-query';

import { getFromLocalStorage } from '../helpers/getFromLocalStorage';
import { api } from '../api';

export const useUpdateTodoById = (id) => {
    const client = useQueryClient();

    const token = getFromLocalStorage('token');

    const variable = {
        completed: true,
        title: 'Выучить JavaScript',
        description: 'Что бы стать успешным разработчиком нужно подтянуть JS и ES6',
        deadline: '2021-09-02T14:33:20.817Z',
        tag: '791eb982-150e-4015-aa02-7bff5a728910',
    };

    const mutation = useMutation(
        (credentials: any) => {
            console.log('useUpdateTodoById', credentials);

            return api.changeTodo(token, id, credentials);
        },
        {
            onError() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                console.log('Ошибка в процессе обновления');
            },
            onSettled() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                client.invalidateQueries('/tasks');
            },
        },
    );

    return mutation;
};
