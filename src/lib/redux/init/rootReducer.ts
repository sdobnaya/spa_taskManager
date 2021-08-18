// Core
import { combineReducers } from 'redux';

// Reducers
import { userToken } from './reducers';
// import { userTask } from './reducers';
import { allUserTasks } from './reducers';
import { allTags } from './reducers';

export const rootReducer = combineReducers({
    userToken,
    allUserTasks,
    allTags,
});

