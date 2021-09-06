// @ts-nocheck
/* Core */
import { useMutation, useQueryClient } from 'react-query';

import { api } from '../api';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';


export const useDeleteTodo = () => {
    const client = useQueryClient();

    const token = getFromLocalStorage('token');

    const mutation = useMutation(
        (credentials: any) => {
            return api.deleteTodo(token, credentials);
        },
        {
            onError() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                console.log('Ошибка в процессе создания задачи');
            },
            onSettled() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                client.invalidateQueries('/tasks');
            },
        },
    );

    return mutation;
};
