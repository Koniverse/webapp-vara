import { Typography } from '@mui/material'
import React from 'react'
import { useLabelStyles } from './style'
import { VariantType } from 'notistack'
import { TooltipHover } from '@components/TooltipHover/TooltipHover'
import { Copy } from '@phosphor-icons/react'

export interface IProps {
  displayLength: number
  marketId: string
  copyPoolAddressHandler: (message: string, variant: VariantType) => void
  style?: React.CSSProperties
}

export const MarketIdLabel: React.FC<IProps> = ({
  displayLength,
  marketId,
  copyPoolAddressHandler,
  style
}) => {
  const { classes } = useLabelStyles()

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(marketId)
      .then(() => {
        copyPoolAddressHandler('Market ID copied to Clipboard', 'success')
      })
      .catch(() => {
        copyPoolAddressHandler('Failed to copy Market ID to Clipboard', 'error')
      })
  }

  return (
    <Typography className={classes.marketId} style={style}>
      <span className={classes.marketIdText}>
        Market ID: {marketId.slice(0, displayLength)}...
        {marketId.slice(marketId.length - displayLength, marketId.length)}{' '}
      </span>
      <TooltipHover text='Copy'>
        <Copy className={classes.clipboardIcon} onClick={copyToClipboard} />
      </TooltipHover>
    </Typography>
  )
}

export default MarketIdLabel
