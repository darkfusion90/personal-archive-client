import { InjectedFormProps } from 'redux-form'

export interface IPostFilterFormData {
    query?: string
    tags?: string[]
    sort: 'title' | 'date'
    order: 'asc' | 'desc'
}

export interface IPostFilterFormConnectorOwnProps {
    afterSetFilter: VoidCallback
}

export type IPostFilterFormConnectorProps = InjectedFormProps<IPostFilterFormData, IPostFilterFormConnectorOwnProps> & IPostFilterFormConnectorOwnProps

export type IPostFilterFormConnector = React.ComponentType<IPostFilterFormConnectorProps>