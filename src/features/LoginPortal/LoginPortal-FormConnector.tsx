import React from 'react'
import { reduxForm } from 'redux-form'

import { ILoginPortalFormConnector, ILoginPortalFormConnectorOwnProps } from './typings/LoginPortal-FormConnector'
import { ILoginResult } from './typings/LoginPortal-View'
import LoginPortalView from './LoginPortal-View'

import useAccount from '../../hooks/useAccount'
import { loginAsync } from '../../store/states/account-state/actions'
import unwrapAxiosThunkResult from '../../utils/unwrap-axios-thunk-result'


const kFormId = 'login-form'

const LoginPortalFormConnector: ILoginPortalFormConnector = ({ handleSubmit }) => {
    // eslint-disable-next-line
    const [_, { login }] = useAccount()
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
        <LoginPortalView
            loginResult={loginResult}
            loginError={loginError}
            isLoggingIn={isLoggingIn}
            formId={kFormId}
            onFormSubmit={handleSubmit(performLogin)}
        />
    )
}

export default reduxForm<LoginData, ILoginPortalFormConnectorOwnProps>({
    form: kFormId,
    initialValues: {
        username: 'John Doe',
        password: 'password'
    }
})(LoginPortalFormConnector)
