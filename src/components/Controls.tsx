// @ts-nocheck
import { useContext } from 'react';

import { TaskContext } from '../context/taskContext';

export const Controls = () => {
    const taskFormState = useContext(TaskContext);
    // console.log('controls', context.mode);

    return (
        // <TaskContext.Consumer>
        <div className = 'controls'>
            <i className = 'las'></i>
            { console.log('controls1', taskFormState.isVisible) }
            <button onClick = { taskFormState.setIsVisible } className = 'button-create-task'>Новая задача</button>
            { console.log('controls2', taskFormState.isVisible) }
        </div>
        // </TaskContext.Consumer>
    );
};
// // @ts-nocheck
// import { useContext } from 'react';
// import { render } from 'react-dom';
// import { TaskContext } from '../context/taskContext';

// export const Controls = () => {
//     const taskFormState = useContext(TaskContext);
//     // console.log('controls', context.mode);

//     return (
//         <TaskContext.Consumer render()
//             { taskFormState.isVisible => (
//                 <div className = 'controls'>
//                     <i className = 'las'></i>
//                     { console.log('controls1', taskFormState.isVisible) }
//                     <button onClick = { taskFormState.setIsVisible } className = 'button-create-task'>Новая задача</button>
//                     { console.log('controls2', taskFormState.isVisible) }
//                 </div>)
//             }
//         />
//     );
// };
