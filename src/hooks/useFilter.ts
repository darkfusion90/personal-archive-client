import { useSelector } from "react-redux"

import FilterState from "../store/states/filter-state/FilterState"
import { useAppDispatch } from "../store"
import { selectFilterState } from "../store/states/filter-state/filter-selectors"
import { setFilter, resetFilter } from "../store/states/filter-state/filter-slice"

interface IUseFilterHookActions {
    setFilter: ValueCallback<FilterState>
    resetFilter: VoidCallback
}

type IUseFilterHook = Hook<FilterState, IUseFilterHookActions>

const useFilter = (): IUseFilterHook => {
    const dispatch = useAppDispatch()
    const filter = useSelector(selectFilterState)

    return [
        filter,
        {
            setFilter: (filter) => dispatch(setFilter(filter)),
            resetFilter: () => dispatch(resetFilter(undefined))
        }
    ]
}

export default useFilter