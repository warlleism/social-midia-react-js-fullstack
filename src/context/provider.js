import React, { createContext, useState } from 'react';
import DarkMode from '../components/hook/useLocal';

export const Context = createContext()

export default function Provider({ children }) {

    const [share, setShare] = useState(false)

    const [mode, setMode] = DarkMode('mode', 'ligth')


    return (
        <Context.Provider value={{ share, setShare, mode, setMode }}>
            {children}
        </Context.Provider>
    )

}