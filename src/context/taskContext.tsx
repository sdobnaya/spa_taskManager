// @ts-nocheck
/* Core */
//
import { useDispatch } from 'react-redux';
//
import { createContext, useState } from 'react';

//
import { setTaskInForm } from '../lib/redux/init/actions';
//

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const [isVisible, setVisible] = useState(false);
    const toggle = () => { setVisible((prevValue) => !prevValue); };

    const dispatch = useDispatch();
    dispatch(setTaskInForm(null));

    return <TaskContext.Provider value = { { isVisible, toggle } }>{ props.children }</TaskContext.Provider>;
};
