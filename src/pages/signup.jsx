/* Components */
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { ActualSignupForm } from '../components/forms/signupForm';

export const SignupPage = () => {
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
