import { Grid, Typography } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import { useStyles } from './style'

export interface IPositionListHeader {
  className?: string
}

export const PositionListHeader: React.FC<IPositionListHeader> = ({
 className = ''
}) => {
  const { classes } = useStyles()


  return (
    <Grid container classes={{ container: classes.container, root: classNames(classes.headerRoot, className) }}>
      <Typography
        className={'__col __col-token'}>
        Token
      </Typography>
      <Typography
        className={'__col __col-fee-tier'}>
        Fee tier
      </Typography>
      <Typography
        className={'__col __col-token-ratio'}>
        Token ratio
      </Typography>
      <Typography
        className={'__col __col-value'}>
        Value
      </Typography>
      <Typography className={'__col __col-price-range'}>
        Price range
      </Typography>
      <Typography className={'__col __col-action'}>
        Action
      </Typography>
    </Grid>
  )
}
