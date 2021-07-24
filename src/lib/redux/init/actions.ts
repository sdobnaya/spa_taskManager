// @ts-nocheck
import { types } from './actionTypes';

export const setUserToken = (payload) => ({
    type: types.SET_CURRENT_USER_TOKEN,
    payload,
});

