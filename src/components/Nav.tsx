// @ts-nocheck
/* Core */
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

import { UserContext } from '../context/userContext';

export const Nav = () => {
    const userState = useContext(UserContext);

    const logoutActions = () => {
        useLogout;
        userState.toggle(userState.loggedIn);
        console.log('logoutActions', userState.loggedIn);
    };

    return (
        <nav>
            { console.log('nav', userState.loggedIn) }
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
                    to = '/signup'>Войти</NavLink>
                <NavLink to = '/task-manager'>К задачам</NavLink> </> : null
            }
        </nav>
    );
};

// return (
//     <nav>
//         <NavLink className = '' to = '/login'>
//             Войти
//         </NavLink>
//         <NavLink
//             onClick = { useLogout }
//             className = ''
//             to = '/signup'>
//             Выйти
//         </NavLink>
//         <NavLink to = '/task-manager'>
//             К задачам
//         </NavLink>
//     </nav>
// );
