import { createContext, useContext } from 'react';

export interface IThemeStyle {
    backgroundColor: string,
    color: string,
}

interface IThemeContext {
    darkModeActive: boolean,
    setDarkModeActive: (boolean: boolean) => void
}

export const getTheme = (darkModeActive: boolean): IThemeStyle =>   {
    if(darkModeActive) {
        return {
            backgroundColor: '#282c34',
            color:  'white'
        }
    } else {
        return {
            backgroundColor: '#c0d0f1',
            color:  'black'
        }
    }
}

export const ThemeContext = createContext<IThemeContext>(
    {   
        darkModeActive: false, 
        setDarkModeActive: theme => console.log('Chosen Theme:', theme)
    }
);

export const useTheme = () => useContext(ThemeContext);



