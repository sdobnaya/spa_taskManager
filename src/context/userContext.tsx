// @ts-nocheck
/* Core */
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [loggedIn, setLoginState] = useState(true);
    const toggle = () => { setLoginState((logedIn) => !logedIn); };

    return <UserContext.Provider value = { { loggedIn, toggle } }>{ props.children }</UserContext.Provider>;
};
