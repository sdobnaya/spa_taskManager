// @ts-nocheck
/* Core */
import { FC, useContext } from 'react';

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
                    { taskContextValue.isVisible === true ? <ActualTaskForm /> : null }
                </div>
            </main>
            <Footer />
        </>
    );
};
