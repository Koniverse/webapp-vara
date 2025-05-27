import { Typography } from '@mui/material'
import { formatNumber } from '@utils/utils'
import React from 'react'
import useStyles from './style'

interface ILiquidationRangeInfo {
  label: string
  amount: number
  tokenX: string
  tokenY: string
}

const LiquidationRangeInfo: React.FC<ILiquidationRangeInfo> = ({
  label,
  amount,
  tokenX,
  tokenY
}) => {
  const { classes } = useStyles()
  return (
    <div className={classes.infoTypeSwap}>
      <div className={classes.infoType}>
        <Typography component='p' className={classes.infoTypeLabel}>
          {label}
        </Typography>
        <Typography component='p' className={classes.infoSwapToken}>
          {tokenY} per {tokenX}
        </Typography>
      </div>
      <div className={classes.infoSwap}>
        <Typography component='span' className={classes.infoAmount}>
          {formatNumber(amount)}
        </Typography>
      </div>
    </div>
  )
}

export default LiquidationRangeInfo
