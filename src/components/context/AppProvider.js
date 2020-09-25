import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    const toggleTheme = () => setTheme(nextTheme);

    const value = {
        theme,
        nextTheme,
        toggleTheme: toggleTheme
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
