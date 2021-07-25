// @ts-nocheck
// Core
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { Input } from '../elements/input';

// Hooks & Helpers
import { useAutoAuthorization } from '../../../hooks/useAutoAuthorization';
import { useAllTasks } from '../../../hooks/useAllTasks';
import { useLogin } from '../../../hooks/useLogin';
import { getFromLocalStorage } from '../../../helpers/getFromLocalStorage';

// Other
import { UserContext } from '../../../context/userContext';
import { schema } from './config';


export const ActualLoginForm = () => {
    const token = getFromLocalStorage('token');

    const authorization = useAutoAuthorization();
    const login = useLogin();
    const allTasks = useAllTasks(token);

    const userState = useContext(UserContext);

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const logIn = form.handleSubmit(async (data) => {
        userState.toggle(userState.loggedIn);
        await login.mutateAsync(data);

        const result = await allTasks.mutateAsync(token);

        console.log('это', result.data.data);// все задачи с сервера

        authorization;

        form.reset();
    });

    return (
        <section className = 'sign-form'>
            <form onSubmit = { logIn }>
                <fieldset disabled = { login.isLoading }>
                    <legend>Вход</legend>
                    <label className = 'label'>
                        <span className = 'errorMessage'>{ form.formState.errors.email?.message }</span>
                        <Input
                            placeholder = 'Электропочта'
                            type = 'text'
                            register = { form.register('email') }
                            name = 'email' />
                    </label>
                    <label className = 'label'>
                        <span className = 'errorMessage'>{ form.formState.errors.password?.message }</span>
                        <Input
                            placeholder = 'Пароль'
                            type = 'password'
                            register = { form.register('password') }
                            name = 'password' />
                    </label>
                    <input
                        className = 'button-login'
                        type = 'submit'
                        value = 'Войти' />
                </fieldset>
                <p>Если у вас до сих пор нет учетной записи, вы можете <Link to = '/signup'>зарегестрироваться </Link></p>
            </form>
        </section>
    );
};
