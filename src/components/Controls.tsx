// @ts-nocheck
import { useContext } from 'react';
import { TaskContext } from '../context/taskContext';

export const Controls = () => {
    const state = useContext(TaskContext);

    const handleClick = (event) => {
        event.preventDefault();

        state.toggle();
    };

    return (
        <div className = 'controls'>
            <i className = 'las'></i>
            <button onClick = { handleClick } className = 'button-create-task'>Новая задача</button>
        </div>
    );
};

