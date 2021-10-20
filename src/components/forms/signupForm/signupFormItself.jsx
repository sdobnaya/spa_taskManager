// @ts-nocheck
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './config';

import { useSignup } from '../../../hooks/useSignup';
import { Input } from '../elements/input'; // eslint-disable-line
import { UserContext } from '../../../context/userContext';
import { useGetTags } from '../../../hooks/useGetTags';

export const ActualSignupForm = () => {
    const signup = useSignup();
    const userState = useContext(UserContext);
    useGetTags(); // eslint-disable-line no-use-before-define

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const signUp = form.handleSubmit(async (data) => {
        userState.toggle(userState.loggedIn);

        await signup.mutateAsync(data);
        form.reset();
    });

    return (
        <section className = 'publish-tip sign-form'>
            <form onSubmit = { signUp }>
                <fieldset disabled = { signup.isLoading }>
                    <legend>Регистрация</legend>
                    <label className = 'label'>
                        <span className = 'errorMessage'>{ form.formState.errors.name?.message }</span>
                        <Input
                            placeholder = 'Имя и фамилия'
                            type = 'text'
                            register = { form.register('name') }
                            name = 'name' />
                    </label>
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
                    <label className = 'label'>
                        <span className = 'errorMessage'>{ form.formState.errors.confirmPassword?.message }</span>
                        <Input
                            placeholder = 'Подтверждение пароля'
                            type = 'password'
                            register = { form.register('confirmPassword') }
                            name = 'confirmPassword' />
                    </label>
                    <input
                        className = 'button-login'
                        type = 'submit'
                        value = 'Зарегестрироваться' />
                </fieldset>
                <p>Перейти к <Link to = '/login'> логину</Link></p>
            </form>
        </section>
    );
};
