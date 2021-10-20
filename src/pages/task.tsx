// @ts-nocheck
/* Core */
// import { render } from 'react-dom';
import { FC, useContext } from 'react';
import { useSelector } from 'react-redux';

/* Components */
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { EmptyList } from '../components/EmptyList';
import { Controls } from '../components/Controls';
import { ActualTaskForm } from '../components/forms/taskForm';
import { TaskContext } from '../context/taskContext';
import { TasksList } from '../components/tasksList';

export const TaskPage: FC = () => {
    const state = useContext(TaskContext);
    const list = useSelector((state) => { return state.allUserTasks; });

    return (
        <>
            <Nav />
            <main>
                <Controls />
                <div className = 'wrap' >
                    { list === [] ? <EmptyList /> : <TasksList/> }
                    { state.isVisible === true ? <ActualTaskForm /> : null }
                </div>
            </main>
            <Footer />
        </>
    );
};
