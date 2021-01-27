import { InjectedFormProps } from "redux-form";
import { IPasswordResetFormData } from "./PasswordResetFormData";
import { IFormState, IUseFormHookActions } from "../../../../hooks/useForm";

export interface IPasswordResetFormConnectorOwnProps {
    passwordResetToken: string
    formState: IFormState
    formActions: IUseFormHookActions<void, any>
}
export type IPasswordResetFormConnectorProps = IPasswordResetFormConnectorOwnProps & InjectedFormProps<IPasswordResetFormData, IPasswordResetFormConnectorOwnProps>
export type IPasswordResetFormConnector = React.ComponentType<IPasswordResetFormConnectorProps>