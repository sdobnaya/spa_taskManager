// Core
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import { LoginPage, SignupPage, TaskPage } from './pages';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path = '/signup' element = { <SignupPage /> } />
                <Route path = '/login' element = { <LoginPage /> } />
                <Route path = '/task-manager' element = { <TaskPage /> } />

                <Route path = '*' element = { <Navigate to = '/login' /> } />
            </Routes>
        </>
    );
};

