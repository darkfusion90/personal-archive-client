import { ICreatePostFormData } from "./typings";

import validator from 'validator'

type ErrorMap = { [k in keyof ICreatePostFormData]: string }

export default function createPostFormValidator(values: ICreatePostFormData): ErrorMap {
    const errors = {} as ErrorMap
    if (typeof values.title === 'string' && validator.isEmpty(values.title)) {
        errors.title = 'Title is required'
    }

    if (values.link && !validator.isEmpty(values.link.trim())) {
        if (!validator.isURL(values.link, { require_protocol: true })) {
            errors.link = 'If provided, must be an url'
        }
    }
    
    return errors
}