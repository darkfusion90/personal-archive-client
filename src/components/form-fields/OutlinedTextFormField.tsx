import React from 'react'
import TextFormField, { ITextFormFieldProps } from './TextFormField'

const OutlinedTextFormField: React.FC<ITextFormFieldProps> = (props) => {
    return <TextFormField {...props} variant='outlined' />
}

export default OutlinedTextFormField
