/* Core */
import { FC } from 'react';

/* Components */
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { ActualLoginForm } from '../components/forms/loginForm';

export const LoginPage: FC = () => {
    return (
        <>
            <Nav />
            <main>
                <ActualLoginForm />
            </main>
            <Footer />
        </>
    );
};
