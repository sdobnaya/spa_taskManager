/* Core */
import { FC } from 'react';

/* Components */
// import { Nav } from '../components';
import { ActualLoginForm } from '../components/forms/loginForm';

export const LoginPage: FC = () => {
    return (
        <section className = 'layout'>
            <ActualLoginForm />
        </section>
    );
};
