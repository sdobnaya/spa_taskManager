// @ts-nocheck
/* Core */
// import { render } from 'react-dom';
import { FC, useContext, Consumer } from 'react';

/* Components */
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { EmptyList } from '../components/EmptyList';
import { Controls } from '../components/Controls';
import { ActualTaskForm } from '../components/forms/taskForm';
import { TaskContext } from '../context/taskContext';

export const TaskPage: FC = () => {
    const taskContextValue = useContext(TaskContext);


    return (
        <>
            <Nav />
            <main>
                <Controls />
                <div className = 'wrap' >
                    <EmptyList />
                    { console.log('task.tsx', taskContextValue.isVisible) }
                    <TaskContext.Consumer>{ (taskContextValue) => { taskContextValue.isVisible === true ? <ActualTaskForm /> : null; } }</TaskContext.Consumer>
                </div>
            </main>
            <Footer />
        </>
    );
};

// <TaskContext.Consumer>
// { (isVisible) => { taskContextValue.isVisible === true ? <ActualTaskForm /> : null; console.log('ZZZZZZZ'); } }
// </TaskContext.Consumer>
