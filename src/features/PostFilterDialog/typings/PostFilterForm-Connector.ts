import { InjectedFormProps } from 'redux-form'
import { IPostTag } from '../../../components/SelectPostTags'

export interface IPostFilterFormData {
    query?: string
    tags?: IPostTag[]
    sort: 'title' | 'date'
    order: 'asc' | 'desc'
}

export interface IPostFilterFormConnectorOwnProps {
    afterSetFilter: VoidCallback
}

export type IPostFilterFormConnectorProps = InjectedFormProps<IPostFilterFormData, IPostFilterFormConnectorOwnProps> & IPostFilterFormConnectorOwnProps

export type IPostFilterFormConnector = React.ComponentType<IPostFilterFormConnectorProps>