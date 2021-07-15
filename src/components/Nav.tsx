// @ts-nocheck
/* Core */
import { NavLink } from 'react-router-dom';

// import { useLogout } from '../hooks/useLogout';

export const Nav = () => {
    // const logout = useLogout();
    // console.log('1', logout);

    return (
        <nav>
            <NavLink className = '' to = '/login'>
                Войти
            </NavLink>
            <NavLink
                // onClick = { useLogout() }
                className = ''
                to = ''>
                Выйти
            </NavLink>
            <NavLink to = '/task-manager'>
                К задачам
            </NavLink>
        </nav>
    );
};
