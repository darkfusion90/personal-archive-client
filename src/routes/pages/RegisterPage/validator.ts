import validator from "validator"

const validate = ({ username, email, password }: Partial<RegisterData>) => {
    const errors: { [P in keyof Partial<RegisterData>]: string } = {}

    const ensureNotEmpty = (name: keyof RegisterData, value?: string) => {
        if (!value || validator.isEmpty(value)) {
            errors[name] = `${name} cannot be empty`
        }
    }

    ensureNotEmpty('username', username)
    ensureNotEmpty('password', password)
    ensureNotEmpty('email', email)

    if (email && !errors.email && !validator.isEmail(email)) {
        errors.email = 'must be a valid email'
    }

    return errors
}

export default validate