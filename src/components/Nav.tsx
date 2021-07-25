// @ts-nocheck
/* Core */
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

import { UserContext } from '../context/userContext';

export const Nav = () => {
    const userState = useContext(UserContext);

    const logoutActions = () => {
        useLogout();
        userState.toggle(userState.loggedIn);
    };

    return (
        <nav>
            { userState.loggedIn
                ? <> <NavLink
                    onClick = { logoutActions }
                    className = ''
                    to = '/signup'>Выйти</NavLink>
                <NavLink to = '/task-manager'>К задачам</NavLink> </> : null
            }
            { !userState.loggedIn
                ? <> <NavLink
                    className = ''
                    to = '/login'>Войти</NavLink>
                <NavLink
                    to = ''
                    style = { { color: '#98a9bc', cursor: 'not-allowed' } }>К задачам</NavLink> </> : null
            }
        </nav>
    );
};

