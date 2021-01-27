import { ProviderContext, useSnackbar as useNotistackSnackbar } from "notistack"
import { useState } from "react"

type IUseSnackbarActions = ProviderContext & {
    setSnackbarShown: ValueCallback<boolean>
}

type IUseSnackbarHook = Hook<boolean, IUseSnackbarActions>

const useSnackbar = (): IUseSnackbarHook => {
    const [snackbarShown, setSnackbarShown] = useState<boolean>(false)
    const snackbarProviderContext = useNotistackSnackbar()

    return [
        snackbarShown,
        {
            setSnackbarShown,
            ...snackbarProviderContext
        }
    ]
}

export default useSnackbar