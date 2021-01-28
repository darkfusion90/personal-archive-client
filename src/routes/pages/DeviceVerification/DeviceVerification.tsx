import React from 'react'
import { useParams } from 'react-router-dom'
import useAsyncState from '../../../hooks/useAsyncState'
import LoadingDialog from '../../../features/LoadingDialog'
import { performDeviceVerification } from '../../../api/auth'
import AsyncContainer from '../../../components/AsyncContainer'
import InfoContainer from '../../../components/InfoContainer'
import UnderlinedLink from '../../../components/UnderlinedLink'
import { routeMap } from '../../routes'

interface IDeviceVerificationUrlParams {
    token: string
}

const DeviceVerification = () => {
    const { token: deviceVerificationToken } = useParams<IDeviceVerificationUrlParams>()
    const [{ status: deviceVerificationStatus }, { setLoading, setFailure, setSuccess }] = useAsyncState<any>()

    React.useEffect(() => {
        if (deviceVerificationStatus === 'uninitiated') {
            setLoading()
            performDeviceVerification(deviceVerificationToken)
                .then(setSuccess)
                .catch(setFailure)
        }
    }, [deviceVerificationToken, deviceVerificationStatus, setLoading, setSuccess, setFailure])

    if (deviceVerificationStatus === 'uninitiated' || deviceVerificationStatus === 'loading') {
        return <LoadingDialog open loadingText='Verifying Link' />
    }

    return (
        <AsyncContainer
            asyncStatus={deviceVerificationStatus}
            successContent={<InfoContainer
                title='Thank you for verifying your device/location'
                subtitle={
                    <UnderlinedLink to={routeMap.login.path}>
                        Go to login page
                    </UnderlinedLink>
                }
            />}
            errorContent={<InfoContainer
                title='This link is either invalid or has already expired'
                subtitle={
                    <>
                        Please visit
                        {' '}
                        <UnderlinedLink to={routeMap.login.path}>
                            Login Page
                        </UnderlinedLink>
                        {' '}
                        to generate a new link to verify the device/location
                    </>
                }
            />}
        />
    )
}

export default DeviceVerification
