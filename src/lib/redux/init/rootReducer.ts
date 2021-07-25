// Core
import { combineReducers } from 'redux';

// Reducers
import { userToken } from './reducers';
import { userTask } from './reducers';

export const rootReducer = combineReducers({
    userToken,
    userTasks: userTask,
});

