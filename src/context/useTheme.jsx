import React,{ useContext, useState } from "react";


const ThemeContext = React.createContext({});

// export function useTheme () {
//     return useContext(ThemeContext)
// }

const ThemeProvider = ({children}) =>  {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme(){
        setDarkTheme(prev => !prev)
    }

    return(
        <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export  { ThemeProvider, ThemeContext};