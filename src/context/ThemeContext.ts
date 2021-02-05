import { createContext, useContext } from 'react';

// Define a definition of what our ThemeStyle comprises of.
export interface IThemeStyle {
    backgroundColor: string,
    color: string,
}

// Define the properties of our Context - in this case, a Getter and Setter for whether we are viewing in Dark Mode or not.
interface IThemeContext {
    darkModeActive: boolean,
    setDarkModeActive: (boolean: boolean) => void
}

// A method to return ThemeStyles based on a boolean.
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

// Our actual Context Definition
export const ThemeContext = createContext<IThemeContext>(
    {   
        darkModeActive: false, 
        setDarkModeActive: theme => console.log('Chosen Theme:', theme)
    }
);

// Export what we've made, so it can be used somewhere else. 
export const useTheme = () => useContext(ThemeContext);



