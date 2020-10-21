import React from 'react'
import { ThemeProviderProps, ThemeProvider } from '@material-ui/core'
import useAppTheme from '../hooks/useAppTheme'
import { darkTheme, lightTheme, setTheme as setThemeLocally } from './'

type IAppThemeProviderProps = Omit<ThemeProviderProps, 'theme'>

const AppThemeProvider: React.FC<IAppThemeProviderProps> = (props) => {
    const [activeTheme] = useAppTheme()

    React.useEffect(() => {
        // Sets theme to localStorage to persist during page reloads
        setThemeLocally(activeTheme)
    }, [activeTheme])

    const getTheme = () => {
        if (activeTheme === 'dark') {
            return darkTheme
        }

        return lightTheme
    }

    return (
        <ThemeProvider theme={getTheme()} {...props} />
    )
}

export default AppThemeProvider
