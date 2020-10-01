import React from 'react'
import Typography, { TypographyProps } from '@material-ui/core/Typography'

const PrimaryTypography: React.FC<TypographyProps> = (props) => {
    return <Typography {...props} color='textPrimary' />
}

export default PrimaryTypography
