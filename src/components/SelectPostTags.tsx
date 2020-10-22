import React from 'react'
import { Field, WrappedFieldProps } from 'redux-form'

import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import AutoComplete, { AutocompleteRenderInputParams } from '@material-ui/lab/Autocomplete'

export interface IPostTag {
    value: string
    label: string
}

interface ISelectPostTagsProps {
    fieldLabel?: string
    getOptionLabel?: ValueCallback<IPostTag['value'], IPostTag['label']>
}

type IRenderSelectProps = ISelectPostTagsProps & WrappedFieldProps

const renderSelect = ({
    input: {
        value: currentValue,
        onChange
    },
    fieldLabel,
    getOptionLabel
}: IRenderSelectProps) => {
    return (
        <AutoComplete<IPostTag, true>
            id="tags-outlined"
            multiple
            selectOnFocus
            clearOnBlur
            options={[]}
            filterOptions={(_, { inputValue }) => {
                const filtered: IPostTag[] = []
                if (inputValue !== '') {
                    const label = getOptionLabel ?
                        getOptionLabel(inputValue) :
                        `Create tag "${inputValue}"`

                    filtered.push({
                        value: inputValue.trim(),
                        label
                    })
                }

                return filtered
            }}
            getOptionLabel={(option) => option.label}
            renderInput={(params: AutocompleteRenderInputParams) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label={fieldLabel || "Create Tags"}
                    placeholder="Tags"
                />
            )}
            renderTags={(value, getTagProps) => value.map((tag, index) => {
                return (
                    <Chip
                        label={tag.value}
                        {...getTagProps({ index })}
                    />
                )
            })}
            onChange={(_, newValue, reason, details) => {
                if (!Array.isArray(newValue)) {
                    return null
                }

                if (reason === 'create-option' || reason === 'select-option') {
                    // Only unique tags allowed
                    const unique: { [k: string]: IPostTag } = {}
                    for (let tag of newValue) {
                        unique[tag.value] = tag
                    }

                    onChange(Object.values(unique))
                }

                if (reason === 'remove-option' && details) {
                    const toRemove = details.option
                    const filtered = currentValue.filter((val: IPostTag) => {
                        return val.value !== toRemove.value
                    })

                    onChange(filtered)
                }
            }}
            value={currentValue || []}
        />
    )
}

const SelectPostTags: React.FC<ISelectPostTagsProps> = ({
    fieldLabel,
    getOptionLabel
}) => {
    return (
        <Field
            name='tags'
            component={renderSelect}
            fieldLabel={fieldLabel}
            getOptionLabel={getOptionLabel}
        />
    )
}

export default SelectPostTags
