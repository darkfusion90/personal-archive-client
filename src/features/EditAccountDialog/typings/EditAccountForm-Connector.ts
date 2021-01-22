import { InjectedFormProps } from "redux-form"

export interface IEditAccountFormData {
    toEditValue: string
}

export interface IEditAccountFormConnectorOwnProps {
    toEdit: 'username' | 'email'
}

type IEditAccountFormConnectorProps = InjectedFormProps<
    IEditAccountFormData,
    IEditAccountFormConnectorOwnProps
> & IEditAccountFormConnectorOwnProps


export type IEditAccountFormConnector = React.ComponentType<IEditAccountFormConnectorProps>