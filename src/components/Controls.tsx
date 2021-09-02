// @ts-nocheck

import { useContext } from 'react';
//
import { useDispatch } from 'react-redux';
///
import { TaskContext } from '../context/taskContext';
//
import { setTaskInForm } from '../lib/redux/init/actions';
///

export const Controls = () => {
    const state = useContext(TaskContext);

    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();

        dispatch(setTaskInForm(null));
        state.toggle();
    };

    return (
        <div className = 'controls'>
            <i className = 'las'></i>
            <button onClick = { handleClick } className = 'button-create-task'>Новая задача</button>
        </div>
    );
};

