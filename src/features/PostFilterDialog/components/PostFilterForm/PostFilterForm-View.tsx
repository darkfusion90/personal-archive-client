import React from 'react'
import { WrappedFieldProps, Field } from 'redux-form'
import {
    RadioGroup,
    Radio,
    FormLabel,
    FormControlLabel,
    FormControl,
    Grid
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { IPostFilterFormView } from '../../typings/PostFilterForm-View'
import TextFormField from '../../../../components/form-fields/TextFormField'
import SelectPostTags from '../../../../components/SelectPostTags'


const useStyles = makeStyles((theme) => createStyles({
    root: {
        [theme.breakpoints.up('sm')]: {
            minWidth: `${theme.breakpoints.width('sm') - 50}px`,
        },
        '& > *': {
            marginTop: theme.spacing(4)
        },
        '& > :last-child': {
            marginBottom: theme.spacing(4)
        }
    }
}))

const PostFilterFormView: IPostFilterFormView = ({
    formId,
    onFormSubmit
}) => {
    const classes = useStyles()

    return (
        <Grid
            container
            className={classes.root}
            id={formId}
            onSubmit={onFormSubmit}
            component='form'
            direction='column'
        >
            <Grid item>
                <TextFormField
                    name='query'
                    label='Search Query'
                    variant='outlined'
                    autoFocus
                    fullWidth
                />
            </Grid>

            <Grid item>
                <Field
                    component={SortTypeComponent}
                    name='sort'
                />
            </Grid>

            <Grid item>
                <Field
                    component={SortOrderComponent}
                    name='order'
                />
            </Grid>

            <Grid item>
                <SelectPostTags
                    fieldLabel='Add Filter Tags'
                    getOptionLabel={(value) => `Add tag "${value}"`}
                />
            </Grid>
        </Grid>
    )
}

const SortTypeComponent: React.FC<WrappedFieldProps> = ({ input }) => {
    return (
        <FormControl component='fieldset'>
            <FormLabel component='legend'>Sort By</FormLabel>
            <RadioGroup {...input}>
                <FormControlLabel value='title' label='Title' control={<Radio />} />
                <FormControlLabel value='date' label='Date' control={<Radio />} />
            </RadioGroup>
        </FormControl>
    )
}

const SortOrderComponent: React.FC<WrappedFieldProps> = ({ input }) => {
    return (
        <FormControl component='fieldset'>
            <FormLabel component='legend'>Sort Order</FormLabel>
            <RadioGroup {...input}>
                <FormControlLabel value='asc' label='Ascending' control={<Radio />} />
                <FormControlLabel value='desc' label='Descending' control={<Radio />} />
            </RadioGroup>
        </FormControl>
    )
}

export default PostFilterFormView
