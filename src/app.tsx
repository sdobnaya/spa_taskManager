// Core
import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import { LoginPage, SignupPage } from './pages';

// Instruments


export const App: FC = () => {
    return (
        <>
            <Routes>
                <Route path = '/signup' element = { <SignupPage /> } />
                <Route path = '/login' element = { <LoginPage /> } />

                <Route path = '*' element = { <Navigate to = '/login' /> } />
            </Routes>
        </>
    );
};

