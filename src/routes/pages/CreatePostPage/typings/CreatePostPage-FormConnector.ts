import { InjectedFormProps } from "redux-form";
import { ICreatePostFormData } from "./CreatePostFormData";

export interface ICreatePostFormConnectorOwnProps { }

export type ICreatePostFormConnectorProps = ICreatePostFormConnectorOwnProps &
    InjectedFormProps<ICreatePostFormData>

export type ICreatePostFormConnector = React.ComponentType<ICreatePostFormConnectorProps>