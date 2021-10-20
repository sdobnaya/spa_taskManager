// Core
import { combineReducers } from 'redux';

// Reducers
import {
    userToken,
    allUserTasks,
    allTags,
    setTaskInForm,
    setCompletedTasks,
} from './reducers';

export const rootReducer = combineReducers({
    userToken,
    allUserTasks,
    allTags,
    setTaskInForm,
    setCompletedTasks,
});

