// @ts-nocheck
import { types } from './actionTypes';

export const userToken = (state = null, action) => {
    switch (action.type) {
    case types.SET_CURRENT_USER_TOKEN:
        return action.payload;
    default:
        return state;
    }
};

// const initialState = {
//     sunny: '',
//     cloudly: '',
//     'min-temperature': '',
//     'max-temperature': '',
// };

// export const pushInitData = (state = [], action) => {
//     switch (action.type) {
//     case types.SET_INIT_STATE:
//         return [...state, action.payload];
//     default:
//         return state;
//     }
// };

// export const currentFilter = (state = initialState, action) => {
//     switch (action.type) {
//     case types.GET_CURRENT_FILTER:
//         return action.payload;
//     default:
//         return state;
//     }
// };
