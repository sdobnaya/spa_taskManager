import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './config';
// import { useLogin } from '../../../hooks/useLogin';
import { Input } from '../elements/input';

export const ActualLoginForm = () => {
    const form = useForm({
        mode: 'onTouched',
        resolver: yupResolver(schema),
    });

    console.log({ form });

    // const logIn = form.handleSubmit(async (data) => {
    //     await login.mutateAsync(data);
    //     form.reset();
    // });

    return (
        <section className = 'sign-form'>
            <form> { /* <form onSubmit = { logIn }>  */ }
                <fieldset> { /* <fieldset disabled = { login.isLoading }>  */ }
                    <legend>Вход</legend> { /* остановилась тут  */ }
                    <label className = 'label'>
                        { /* <span className = 'errorMessage'>{ `${form.formState.errors.email}` }</span> */ }
                        <input
                            placeholder = 'Электропочта'
                            type = 'text'
                            name = 'email'></input>
                    </label>
                    <label className = 'label'>
                        <span className = 'errorMessage'>{ `${form.formState.errors.password}` }</span>
                        <Input
                            placeholder = 'Пароль'
                            type = 'password'
                            error = { form.formState.errors.password }
                            register = { form.register('password') }
                            name = 'password'></Input>
                    </label>
                    { /* <Input
                        label = 'Электропочта'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />
                    <Input
                        label = 'Пароль'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } /> */ }

                    <input
                        className = 'button-login'
                        type = 'submit'
                        value = 'Войти' />
                </fieldset>
                <p>Если у вас до сих пор нет учетной записи, вы можете зарегестрироваться</p>
            </form>
        </section>
    );
};
