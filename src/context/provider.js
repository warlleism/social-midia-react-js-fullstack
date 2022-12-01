import React, { createContext, useState } from 'react';
import DarkMode from '../components/hook/useLocal';

export const Context = createContext()

export default function Provider({ children }) {

    const [share, setShare] = useState(false)

    const [mode, setMode] = DarkMode('mode', 'ligth')

    if (mode == "ligth") {
        var objRef = document.body;
        objRef.style.background = "#f2f2f2"
    } else {
        var objRef = document.body;
        objRef.style.background = "#151515"
    }

    return (
        <Context.Provider value={{ share, setShare, mode, setMode }}>
            {children}
        </Context.Provider>
    )

}