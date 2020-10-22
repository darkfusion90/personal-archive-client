import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import PostFilterFormView from './PostFilterForm-View'
import {
    IPostFilterFormConnector,
    IPostFilterFormConnectorOwnProps,
    IPostFilterFormData
} from '../../typings/PostFilterForm-Connector'
import useFilter from '../../../../hooks/useFilter'
import { RootState } from '../../../../store'
import { selectFilterState } from '../../../../store/states/filter-state/filter-selectors'

const kFormId = 'post-filter-form'

const PostFilterFormConnector: IPostFilterFormConnector = ({ handleSubmit, afterSetFilter }) => {
    // eslint-disable-next-line
    const [_, { setFilter }] = useFilter()

    const submitForm = (formValues: IPostFilterFormData) => {
        const tags = (formValues.tags || []).map(tag => tag.value)

        setFilter({ ...formValues, tags })
        afterSetFilter()
    }

    return <PostFilterFormView formId={kFormId} onFormSubmit={handleSubmit(submitForm)} />
}

const mapStateToProps = (state: RootState) => {
    const filter = selectFilterState(state)
    const tags = (filter.tags || []).map(value => ({
        value,
        label: `Add Tag: ${value}`
    }))

    return {
        initialValues: { ...filter, tags }
    }
}

const WithForm = reduxForm<IPostFilterFormData, IPostFilterFormConnectorOwnProps>({
    form: kFormId,
})(PostFilterFormConnector)

export default connect(mapStateToProps)(WithForm)

