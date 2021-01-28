import React from 'react'
import { useSnackbar } from 'notistack'

import LoginPageView from './LoginPage-View'
import { ILoginPageContainer } from './typings/LoginPage-Container'
import { requestDeviceVerificationToken } from '../../../api/auth'

const LoginPageContainer: ILoginPageContainer = ({
    loginResult,
    loginError,
    ...otherProps
}) => {
    const { enqueueSnackbar } = useSnackbar()
    // If login fails, error snackbar is shown and then marked shown
    // Next time the snackbar is not shown since it was marked shown
    // Make sure to reset the flag on snackbar close/UI state changed (text field change, etc)
    const [snackbarShown, setSnackbarShown] = React.useState(false)
    if (loginResult && !snackbarShown) {
        const onEnter = () => setSnackbarShown(true)

        if (loginResult === 'success') {
            enqueueSnackbar(
                'Login Successful. You will be redirected shortly',
                { variant: 'success', onEnter }
            )
        } else {
            enqueueSnackbar('Login Failed', { variant: 'error', onEnter })
        }
    }

    React.useEffect(() => {
        if (loginError === 'device-not-trusted') {
            requestDeviceVerificationToken()
        }
    }, [loginError])

    return <LoginPageView loginResult={loginResult} loginError={loginError} {...otherProps} />
}

export default LoginPageContainer