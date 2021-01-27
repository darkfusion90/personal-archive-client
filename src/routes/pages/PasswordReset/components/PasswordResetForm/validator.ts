import { IPasswordResetFormData } from "../../typings/PasswordResetFormData";
import validator from "validator";

const passwordResetFormValidator = ({ password, confirmPassword }: IPasswordResetFormData) => {
    const errors: Partial<IPasswordResetFormData> = {}

    if (!password) {
        errors.password = 'Password is required'
    }

    if (!confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required'
    }

    if ((password && confirmPassword) && !validator.equals(password, confirmPassword)) {
        errors.confirmPassword = 'Must match the password'
    }

    return errors
}

export default passwordResetFormValidator