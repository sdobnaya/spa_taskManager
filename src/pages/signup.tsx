/* Core */
import { FC } from 'react';

/* Components */
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { ActualSignupForm } from '../components/forms/signupForm';

export const SignupPage: FC = () => {
    return (
        <>
            <Nav />
            <main>
                <ActualSignupForm />
            </main>
            <Footer />
        </>
    );
};
