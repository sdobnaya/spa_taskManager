// @ts-nocheck
import { types } from './actionTypes';

export const setUserToken = (payload) => ({
    type: types.SET_CURRENT_USER_TOKEN,
    payload,
});

export const setNewTask = (payload) => ({
    type: types.SET_NEW_TASK,
    payload,
});

