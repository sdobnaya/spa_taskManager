/* Core */
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <NavLink className = '' to = '/login'>
                Войти
            </NavLink>
            <NavLink to = '/task-manager'>
                К задачам
            </NavLink>
        </nav>
    );
};

