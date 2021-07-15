// @ts-nocheck
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './config';
import { useLogin } from '../../../hooks/useLogin';
import { Input } from '../elements/input';

export const ActualLoginForm = () => {
    const login = useLogin();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const logIn = form.handleSubmit(async (data) => {
        await login.mutateAsync(data);
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
