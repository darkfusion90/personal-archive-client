import React from 'react'
import { reduxForm } from 'redux-form'

import useAccount from '../../../hooks/useAccount'
import { loginAsync } from '../../../store/states/account-state/actions'
import unwrapAxiosThunkResult from '../../../utils/unwrap-axios-thunk-result'

import { ILoginPageFormConnector, ILoginPageFormConnectorOwnProps } from './typings/LoginPage-FormConnector'
import { ILoginResult } from './typings/LoginPage-View'
import LoginPageContainer from './LoginPage-Container'

const kFormId = 'login-form'

const LoginPageFormConnector: ILoginPageFormConnector = ({ handleSubmit }) => {
    // eslint-disable-next-line
    const [{ loggedIn }, { login }] = useAccount()
    const [isLoggingIn, setLoggingIn] = React.useState(false)
    const [loginError, setLoginError] = React.useState<string | undefined>(undefined)
    const [loginResult, setLoginResult] = React.useState<ILoginResult>()

    const performLogin = async (loginData: LoginData) => {
        console.log('Perform Login: ', loginData)
        setLoggingIn(true)

        await login(loginData)
            .then(unwrapAxiosThunkResult(loginAsync))
            .then((_: any) => {
                setLoginResult('success')
            })
            .catch((errResponse: SimplifiedAxiosResponse) => {
                if (errResponse.status === 401) {
                    setLoginError(errResponse.data.message)
                } else {
                    setLoginError('An unknown error occurred. Please try again later')
                }

                setLoginResult('failure')
            })

        setLoggingIn(false)
    }

    return (
        <LoginPageContainer
            loggedIn={loggedIn}
            loginResult={loginResult}
            loginError={loginError}
            isLoggingIn={isLoggingIn}
            formId={kFormId}
            onFormSubmit={handleSubmit(performLogin)}
        />
    )
}

export default reduxForm<LoginData, ILoginPageFormConnectorOwnProps>({
    form: kFormId,
    initialValues: {
        username: 'John Doe',
        password: 'password'
    }
})(LoginPageFormConnector)
