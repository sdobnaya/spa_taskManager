// @ts-nocheck
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';
import { api } from '../api';

export const getTodoById = async (tagId) => {
    const token = getFromLocalStorage('token');
    const result = await api.getTodoById(token, tagId);

    return result;
};
