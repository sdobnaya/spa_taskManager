// @ts-nocheck
import { useMutation, useQueryClient } from 'react-query';

import { getFromLocalStorage } from '../helpers/getFromLocalStorage';
import { api } from '../api';

export const useUpdateTodoById = (id) => {
    const client = useQueryClient();

    const token = getFromLocalStorage('token');

    const mutation = useMutation(
        (credentials) => {
            return api.changeTodo(token, id, credentials);
        },
        {
            onError() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                console.log('Ошибка в процессе обновления'); // eslint-disable-line
            },
            onSettled() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                client.invalidateQueries('/tasks');
            },
        },
    );

    return mutation;
};
