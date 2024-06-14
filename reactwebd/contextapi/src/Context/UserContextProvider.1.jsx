import React from 'react';
import UserContext from "./UserContext";

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
    const [user, setUser] = React.useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
