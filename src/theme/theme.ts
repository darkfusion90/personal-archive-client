import { createMuiTheme } from '@material-ui/core/styles'
import { purple, deepOrange } from '@material-ui/core/colors'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const commonPalette: PaletteOptions = {
    primary: {
        main: purple[500],
        contrastText: '#fff'
    },
    secondary: {
        main: deepOrange[500]
    }
}

export const darkTheme = createMuiTheme({
    palette: {
        ...commonPalette,
        type: 'dark',
        background: {
            default: '#121212',
            paper: '#0e0e0e',
        },
        text: {
            primary: '#fff'
        },
        action: {
            focus: '#f00'
        },
        divider: '#dedede'
    }
})

export const lightTheme = createMuiTheme({
    palette: {
        ...commonPalette,
        divider: '#121212',
        type: 'light'
    }
})