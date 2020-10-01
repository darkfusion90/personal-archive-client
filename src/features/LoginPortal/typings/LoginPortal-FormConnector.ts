import { InjectedFormProps } from "redux-form"

export interface ILoginPortalFormConnectorOwnProps { }

export type IPropsFromReduxForm = InjectedFormProps<LoginData, ILoginPortalFormConnectorOwnProps>
export type ILoginPortalFormConnector = React.FC<ILoginPortalFormConnectorOwnProps & IPropsFromReduxForm>