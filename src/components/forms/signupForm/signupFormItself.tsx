import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './config';
// import { useLogin } from '../../../hooks/useLogin';
import { Input } from '../elements/input';

export const ActualSignupForm = () => {
    const form = useForm({
        mode: 'onTouched',
        resolver: yupResolver(schema),
    });

    // const logIn = form.handleSubmit(async (data) => {
    //     await login.mutateAsync(data);
    //     form.reset();
    // });

    return (
        <section className = 'publish-tip sign-form'>
            <form> { /* <form onSubmit = { logIn }>  */ }
                <fieldset> { /* <fieldset disabled = { login.isLoading }>  */ }
                    <legend>Регистрация</legend>
                    <label className = 'label'>
                        { /* <span className = 'errorMessage'>{ `${form.formState.errors.name}` }</span> */ }
                        <Input
                            placeholder = 'Имя и фамилия'
                            type = 'text'
                            error = { form.formState.errors.name }
                            register = { form.register('name') }
                            name = 'name' />
                    </label>
                    <label className = 'label'>
                        { /* <span className = 'errorMessage'>{ `${form.formState.errors.email}` }</span> */ }
                        <Input
                            placeholder = 'Электропочта'
                            type = 'text'
                            error = { form.formState.errors.email }
                            register = { form.register('email') }
                            name = 'email' />
                    </label>
                    <label className = 'label'>
                        { /* <span className = 'errorMessage'>{ `${form.formState.errors.password}` }</span> */ }
                        <Input
                            placeholder = 'Пароль'
                            type = 'password'
                            error = { form.formState.errors.password }
                            register = { form.register('password') }
                            name = 'password' />
                    </label>
                    <label className = 'label'>
                        { /* <span className = 'errorMessage'>{ `${form.formState.errors.confirmPassword}` }</span> */ }
                        <Input
                            placeholder = 'Подтверждение пароля'
                            type = 'password'
                            error = { form.formState.errors.confirmPassword }
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
