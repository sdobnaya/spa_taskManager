/* Core */
import { FC } from 'react';

/* Components */
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { EmptyList } from '../components/EmptyList';
import { Controls } from '../components/Controls';
import { ActualTaskForm } from '../components/forms/taskForm';

export const TaskPage: FC = () => {
    return (
        <>
            <Nav />
            <main>
                <Controls />
                <div className = 'wrap' >
                    <EmptyList />
                    <ActualTaskForm />
                </div>
            </main>
            <Footer />
        </>
    );
};
