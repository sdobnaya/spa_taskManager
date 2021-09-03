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

export const setTaskInForm = (state = null, action) => {
    switch (action.type) {
        case types.SET_TASK_IN_FORM:
            return action.payload;
        default:
            return state;
    }
};

export const setCompletedTasks = (state = [], action) => {
    switch (action.type) {
        case types.SET_COMPLETED_TASKS:
            if (typeof action.payload === 'object') {
                return [...action.payload];
            }

            return [...state, action.payload];
        default:
            return state;
    }
};
