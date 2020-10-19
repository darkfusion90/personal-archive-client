import { InjectedFormProps } from 'redux-form'

export interface IRegisterPageConnectorOwnProps { }

export type IPropsFromReduxForm = InjectedFormProps<RegisterData, IRegisterPageConnectorOwnProps>
export type IRegisterPageConnector = React.FC<IRegisterPageConnectorOwnProps & IPropsFromReduxForm>