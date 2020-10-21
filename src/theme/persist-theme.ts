import { IAppTheme } from "../store/states/theme-state/ThemeState"

const kLocalStorageThemeKey = 'personal-archive-theme'

const persistTheme = {
    setTheme: (theme: IAppTheme) => {
        localStorage.setItem(kLocalStorageThemeKey, theme)
    },
    clearTheme: () => {
        localStorage.removeItem(kLocalStorageThemeKey)
    },
    getTheme: (): IAppTheme | null => {
        const theme = localStorage.getItem(kLocalStorageThemeKey)
        // Only load applicable theme
        if (theme === 'dark' || theme === 'light') {
            return theme
        }

        return null
    }
}

export default persistTheme