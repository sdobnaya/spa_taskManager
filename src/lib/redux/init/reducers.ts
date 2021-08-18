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

export const allUserTasks = (state = [], action) => {
    switch (action.type) {
        case types.SET_PREVIOUS_TASKS:
            return action.payload;
        case types.SET_NEW_TASK:
            return [...state, action.payload];
        default:
            return state;
    }
};

export const allTags = (state = null, action) => {
    switch (action.type) {
        case types.SET_TAGS:
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

// export const userTask = (state = [], action) => {
//     switch (action.type) {
//         case types.SET_NEW_TASK:
//             return [...state, action.payload];
//         default:
//             return state;
//     }
// };
