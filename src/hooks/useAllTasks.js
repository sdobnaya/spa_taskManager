// @ts-nocheck
/* Core */
import { useMutation } from 'react-query';

import { api } from '../api';


export const useAllTasks = (token) => {
    const mutation = useMutation(
        () => {
            return api.allTodos(token);
        },
        {
            onError() {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                console.log('Ошибка в процессе загрузки задач пользователя'); // eslint-disable-line
            },
        },
    );

    return mutation;
};
