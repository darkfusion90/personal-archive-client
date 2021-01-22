import React from 'react'
import LinkTypography, { ILinkTypographyProps } from "./LinkTypography"

import { makeStyles, createStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(() => createStyles({
    link: {
        textDecoration: 'underline'
    }
}))

const UnderlinedLink: React.FC<ILinkTypographyProps> = ({ className, ...props }) => {
    const classes = useStyles()

    return (
        <LinkTypography color='inherit' className={classes.link} {...props} />
    )
}

export default UnderlinedLink