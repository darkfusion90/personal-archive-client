import { useState, useEffect } from "react"
import { useSnackbar } from "notistack"

export interface IUseFormHookActions<Meta, Error> {
    resetFormState: VoidCallback
    setFormSubmitting: VoidCallback
    setFormSubmitFail: ValueCallback<Error>
    setFormSubmitSuccess: ValueCallback<Meta>
}

export interface IFormState<Meta = any, Error = any> {
    status: IFormStatus
    meta?: Meta
    error?: Error
}

export type IFormStatus = 'initial' | 'submitting' | 'submit-fail' | 'submit-success'
type IUseFormHook<M, E> = Hook<IFormState<M, E>, IUseFormHookActions<M, E>>

interface IUseFormHookOpts {
    successSnackbarMessage: string
    failureSnackbarMessage: string
}

const useForm = <Meta = void, Error = void>({ successSnackbarMessage, failureSnackbarMessage }: IUseFormHookOpts): IUseFormHook<Meta, Error> => {
    const [formState, setFormState] = useState<IFormState>({ status: 'initial' })
    const [snackbarShown, setSnackbarShown] = useState(false)
    const { enqueueSnackbar } = useSnackbar()

    useEffect(() => {
        if (snackbarShown) {
            return
        }

        if (formState.status === 'submit-success') {
            enqueueSnackbar(successSnackbarMessage, { variant: 'success' })
            setSnackbarShown(true)
        }

        if (formState.status === 'submit-fail') {
            enqueueSnackbar(failureSnackbarMessage, { variant: 'error' })
            setSnackbarShown(true)
        }
    }, [snackbarShown, formState, setFormState, enqueueSnackbar, successSnackbarMessage, failureSnackbarMessage])

    return [
        formState,
        {
            resetFormState: () => setFormState({ status: 'initial', meta: undefined, error: undefined }),
            setFormSubmitSuccess: (meta: Meta) => setFormState({ status: 'submit-success', meta }),
            setFormSubmitFail: (error: Error) => setFormState({ status: 'submit-fail', error }),
            setFormSubmitting: () => setFormState({ status: 'submitting' })
        }
    ]
}

export default useForm