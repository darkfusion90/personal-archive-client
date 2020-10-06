import { useState, useEffect } from "react"
import { useSnackbar } from "notistack"

interface IUseFormHookActions<M, E> {
    setFormSubmitting: VoidCallback
    setFormSubmitFail: ValueCallback<E>
    setFormSubmitSuccess: ValueCallback<M>
}

export interface IFormState<M = any, E = any> {
    status: IFormStatus
    meta?: M
    error?: E
}

export type IFormStatus = 'initial' | 'submitting' | 'submit-fail' | 'submit-success'
type IUseFormHook<M, E> = Hook<IFormState<M, E>, IUseFormHookActions<M, E>>

interface IUseFormHookOpts {
    successSnackbarMessage: string
    failureSnackbarMessage: string
}

const useForm = <M = void, E = void>({ successSnackbarMessage, failureSnackbarMessage }: IUseFormHookOpts): IUseFormHook<M, E> => {
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
            setFormSubmitSuccess: (meta: M) => setFormState({ status: 'submit-success', meta }),
            setFormSubmitFail: (error: E) => setFormState({ status: 'submit-fail', error }),
            setFormSubmitting: () => setFormState({ status: 'submitting' })
        }
    ]
}

export default useForm