import { InjectedFormProps } from 'redux-form'

export interface ILoginPageFormConnectorOwnProps { }

export type IPropsFromReduxForm = InjectedFormProps<LoginData, ILoginPageFormConnectorOwnProps>
export type ILoginPageFormConnector = React.FC<ILoginPageFormConnectorOwnProps & IPropsFromReduxForm>