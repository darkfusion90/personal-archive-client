import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import LightThemeIcon from '@material-ui/icons/WbSunny'
import DarkThemeIcon from '@material-ui/icons/NightsStay'

import useAppTheme from '../../../hooks/useAppTheme'

const ThemeSwitcher = () => {
    const [activeTheme, { setActiveTheme }] = useAppTheme()
    const isDarkTheme = activeTheme === 'dark'

    const renderIcon = () => {
        if (isDarkTheme) {
            return DarkThemeIcon
        }

        return LightThemeIcon
    }

    const handleClick = () => {
        if (isDarkTheme) {
            return setActiveTheme('light')
        }

        setActiveTheme('dark')
    }

    const Icon = renderIcon()
    return (
        <Tooltip title='Toggle light/dark theme'>
            <IconButton onClick={handleClick}>
                <Icon fontSize='large' />
            </IconButton>
        </Tooltip>
    )
}

export default ThemeSwitcher
