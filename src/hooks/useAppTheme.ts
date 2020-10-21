import { useSelector } from "react-redux"

import { selectActiveTheme, setActiveTheme } from "../store/states/theme-state"
import { useAppDispatch } from "../store"
import { IAppTheme } from "../store/states/theme-state/ThemeState"

interface IUseThemeHookActions {
    setActiveTheme: ValueCallback<IAppTheme>
}

type IUseThemeHook = Hook<IAppTheme, IUseThemeHookActions>

const useAppTheme = (): IUseThemeHook => {
    const activeTheme = useSelector(selectActiveTheme)
    const dispatch = useAppDispatch()

    return [
        activeTheme,
        {
            setActiveTheme: (theme) => dispatch(setActiveTheme(theme))
        }
    ]
}

export default useAppTheme