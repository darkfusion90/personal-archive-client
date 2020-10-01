import { createMuiTheme } from '@material-ui/core/styles'
import { purple, deepOrange } from '@material-ui/core/colors'

const rootTheme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#121212',
        },
        primary: {
            main: purple[500],
            contrastText: '#fff'
        },
        secondary: {
            main: deepOrange[500]
        },
        text: {
            primary: '#fff'
        },
        action: {
            focus: '#f00'
        }
    }
})

export default rootTheme