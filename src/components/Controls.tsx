// @ts-nocheck
import { useContext } from 'react';
import { TaskContext } from '../context/taskContext';

export const Controls = () => {
    const taskFormState = useContext(TaskContext);
    // console.log('controls', context.mode);

    return (
        <div className = 'controls'>
            <i className = 'las'></i>
            <button onClick = { taskFormState.setIsVisible } className = 'button-create-task'>Новая задача</button>
        </div>
    );
};
