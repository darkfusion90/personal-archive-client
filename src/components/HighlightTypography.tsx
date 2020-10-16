import React from 'react'
import { TypographyProps, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import clsx from 'clsx'
import parse from 'autosuggest-highlight/parse'

interface IHighlightTypographyProps extends TypographyProps {
    query?: string
    text?: string
}

type IHighlightTypography = React.FC<IHighlightTypographyProps>

const useStyles = makeStyles((theme) => createStyles({
    highlight: {
        backgroundColor: theme.palette.secondary.main,
    }
}))

const HighlightTypography: IHighlightTypography = ({ query, text, ...typographyProps }) => {
    const classes = useStyles()

    const TypographyWithProps: React.FC<TypographyProps> = (props) => {
        const className = clsx(typographyProps.className, props.className)
        return <Typography {...typographyProps} {...props} className={className} />
    }

    if (!query || !text) {
        return <TypographyWithProps>{text}</TypographyWithProps>
    }

    const renderHighlighted = (text: string) => {
        return (
            // @ts-ignore
            <TypographyWithProps component='span' className={classes.highlight}>
                {text}
            </TypographyWithProps>
        )
    }

    const renderNormal = (text: string) => {
        return (
            // @ts-ignore
            <TypographyWithProps component='span'>{text}</TypographyWithProps>
        )
    }

    return (
        <TypographyWithProps>
            {
                queryMatcher(text, query).map(({ text, highlight }) => {
                    return highlight ? renderHighlighted(text) : renderNormal(text)
                })
            }
        </TypographyWithProps>
    )
}

// Sincere credits: https://github.com/moroshko/autosuggest-highlight/issues/5#issuecomment-392333344
function queryMatcher(text?: string, query?: string) {
    if (!(typeof text === 'string' && typeof query === 'string')) {
        return []
    }

    const trimmedQuery = query.trim().toLowerCase()
    const textLower = text.toLowerCase()
    const queryLength = trimmedQuery.length

    if (textLower.length === 0 && queryLength === 0) {
        return []
    }

    const results = []
    let indexOf = textLower.indexOf(trimmedQuery)
    while (indexOf > -1) {
        results.push([indexOf, indexOf + queryLength])
        indexOf = textLower.indexOf(query, indexOf + queryLength)
    }

    return parse(text, results)
}

export default HighlightTypography
