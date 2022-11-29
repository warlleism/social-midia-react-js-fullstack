import React, { useState } from "react";

const DarkMode = (key, value) => {

    const [stored, setStored] = useState(() => {

        try {
            const localValue = localStorage.getItem(key)

            if (localValue) {
                return JSON.parse(localValue)
            } else {
                localStorage.setItem(key, JSON.stringify(value))
                return (value)
            }
        } catch (error) {
            return value
        }
    })

    const setValue = newValue => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue))
        } catch (error) {
            console.log(error)
        }
        setStored(newValue)
    };

    return [stored, setValue]

}

export default DarkMode;