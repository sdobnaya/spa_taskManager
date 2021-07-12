/* Core */
import { FC } from 'react';

/* Components */
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { ActualTaskForm } from '../components/forms/taskForm';

export const TaskPage: FC = () => {
    return (
        <>
            <Nav />
            <main>
                <div className = 'wrap' >
                    <ActualTaskForm />
                </div>
            </main>
            <Footer />
        </>
    );
};
