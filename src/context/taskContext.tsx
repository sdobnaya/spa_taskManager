// @ts-nocheck
/* Core */
import { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const [isVisible, setVisible] = useState(false);
    const toggle = () => { setVisible((prevValue) => !prevValue); };

    return <TaskContext.Provider value = { { isVisible, toggle, setVisible } }>{ props.children }</TaskContext.Provider>;
};
