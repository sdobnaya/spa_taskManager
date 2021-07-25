// @ts-nocheck
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { setUserToken } from '../../../lib/redux/init/actions';


import { Input } from '../elements/input';
import { UserContext } from '../../../context/userContext';

import { getFromLocalStorage } from '../../../helpers/getFromLocalStorage';
// import { useAutoAuthorization } from '../../../hooks/useAutoAuthorization'; ---
import { useAllTasks } from '../../../hooks/useAllTasks';

import { schema } from './config';
import { useLogin } from '../../../hooks/useLogin';

export const ActualLoginForm = () => {
    //
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = getFromLocalStorage('token');
    //
    const login = useLogin();
    const userState = useContext(UserContext);

    //
    const allTasks = useAllTasks(token);
    //

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const logIn = form.handleSubmit(async (data) => {
        userState.toggle(userState.loggedIn);
        await login.mutateAsync(data);

        console.log('зашли', allTasks.data);
        const result = await allTasks.mutateAsync(token);
        console.log('это', result.data.data);

        // useAutoAuthorization(); ---

        dispatch(setUserToken(token)); // token === null ? navigate('/login') : +++

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
