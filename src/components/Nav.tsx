// @ts-nocheck
/* Core */
import { NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

export const Nav = () => {
    return (
        <nav>
            <NavLink className = '' to = '/login'>
                Войти
            </NavLink>
            <NavLink
                onClick = { useLogout }
                className = ''
                to = '/signup'>
                Выйти
            </NavLink>
            <NavLink to = '/task-manager'>
                К задачам
            </NavLink>
        </nav>
    );
};
