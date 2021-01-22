import React from 'react'
import LoadingDialog from '../features/LoadingDialog'

interface IAsyncContainerProps {
    asyncStatus: GenericAsyncState
    loadingText?: string
    successContent: any
    errorContent: any
}

const AsyncContainer: React.FC<IAsyncContainerProps> = ({ asyncStatus, loadingText, ...contents }) => {
    if (asyncStatus === 'loading' || asyncStatus === 'uninitiated') {
        return <LoadingDialog open={true} loadingText={loadingText} />
    }

    if (asyncStatus === 'fail') {
        return contents.errorContent
    }

    return contents.successContent
}

export default AsyncContainer
