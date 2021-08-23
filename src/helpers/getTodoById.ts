// @ts-nocheck
import { getFromLocalStorage } from './getFromLocalStorage';
import { api } from '../api';

export const getTodoById = async (tagId) => {
    const token = getFromLocalStorage('token');
    const result = await api.getTodoById(token, tagId);
    console.log('helper', result);

    return result;
};
