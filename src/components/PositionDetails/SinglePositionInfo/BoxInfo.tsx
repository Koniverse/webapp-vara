import { Button, Grid, Tooltip, Typography } from '@mui/material'
import loader from '@static/gif/loading2.gif'
import { formatNumber, formatNumbers, showPrefix } from '@utils/utils'
import React from 'react'
import loadingAnimation from '@static/gif/loading.gif'
import { ILiquidityToken } from './consts'
import {useBoxInfoStyles} from './style'
import { FormatNumberThreshold, PrefixConfig } from '@store/consts/types'
import { TooltipHover } from '@components/TooltipHover/TooltipHover'
import { getButtonClasses } from '@utils/uiUtils.ts'
import { ArrowsDownUp } from '@phosphor-icons/react'

export interface BoxInfoToken extends Omit<ILiquidityToken, 'claimValue' | 'liqValue'> {
  value: number
  price?: number
}

export const BoxInfo: React.FC<{
  title: string
  onClickButton?: () => void
  tokenA: BoxInfoToken
  tokenB: BoxInfoToken
  showBalance?: boolean
  swapHandler?: () => void
  showLoader?: boolean
  isBalanceLoading: boolean
}> = ({
  title,
  onClickButton,
  tokenB,
  tokenA,
  showBalance = false,
  swapHandler,
  showLoader = false,
  isBalanceLoading
}) => {
  const { classes } = useBoxInfoStyles()

  const thresholdsWithTokenDecimal = (decimals: number): FormatNumberThreshold[] => [
    {
      value: 10,
      decimals
    },
    {
      value: 10000,
      decimals: 6
    },
    {
      value: 100000,
      decimals: 4
    },
    {
      value: 1000000,
      decimals: 3
    },
    {
      value: 1000000000,
      decimals: 2,
      divider: 1000000
    },
    {
      value: Infinity,
      decimals: 2,
      divider: 1000000000
    }
  ]

  const prefixConfig: PrefixConfig = {
    B: 1000000000,
    M: 1000000
  }

  const tokenXPrintValue =
    Math.abs(Number(tokenA.value)) < 10 ** Number(-tokenA.decimal) ? 0 : Number(tokenA.value)

  const tokenYPrintValue =
    Math.abs(Number(tokenB.value)) < 10 ** Number(-tokenB.decimal) ? 0 : Number(tokenB.value)

  return (
    <Grid className={classes.boxInfo}>
      <Grid container justifyContent='space-between'>
        <Typography className={classes.title}> {title}</Typography>
      </Grid>

      <Grid className={classes.tokenGrid} container direction='column'>
        {showLoader ? (
          <Grid container className={classes.cover}>
            <img src={loader} className={classes.loader} alt='Loader' />
          </Grid>
        ) : null}
        <Grid className={classes.tokenArea}>
          <Grid className={classes.tokenAreaUpperPart}>
            <Typography className={classes.tokenValue}>
              {formatNumbers(thresholdsWithTokenDecimal(Number(tokenA.decimal)))(
                `${tokenXPrintValue}`
              )}
              {showPrefix(tokenXPrintValue, prefixConfig)}
            </Typography>
            <Grid className={classes.token}>
              <img className={classes.iconSmall} src={tokenA.icon} alt={tokenA.name} />
              <Typography className={classes.tokenName}>{tokenA.name}</Typography>
            </Grid>
          </Grid>
          {showBalance ? (
            <Grid className={classes.tokenAreaLowerPart}>
              <div className={classes.tokenUSDValueWrapper}>
                {typeof tokenA.usdValue !== 'undefined' && tokenA.price ? (
                  <Tooltip
                    enterTouchDelay={0}
                    leaveTouchDelay={Number.MAX_SAFE_INTEGER}
                    title="Estimated USD Value of the Position's Tokens"
                    placement='bottom'
                    classes={{
                      tooltip: classes.tooltip
                    }}>
                    <Typography className={classes.tokenUSDValue}>
                      <span className="__symbol">{'~$ '}</span>
                      {formatNumber((tokenA.value * tokenA.price).toFixed(2))}
                      {showPrefix(tokenA.value * tokenA.price)}
                    </Typography>
                  </Tooltip>
                ) : null}
              </div>
              <Typography className={classes.tokenBalance}>
                Balance:{' '}
                {isBalanceLoading ? (
                  <img src={loadingAnimation} className={classes.loadingBalance} alt='Loading' />
                ) : (
                  formatNumber(tokenA.balance)
                )}{' '}
                {tokenA.name}
              </Typography>
            </Grid>
          ) : null}
        </Grid>

        <div className={classes.separator}>
          {typeof swapHandler !== 'undefined' ? (
            <TooltipHover text='Reverse tokens'>
              <div
                className={classes.arrowsIcon}
                onClick={swapHandler}
              >
                <ArrowsDownUp />
              </div>
            </TooltipHover>
          ) : null}
        </div>

        <Grid className={classes.tokenArea}>
          <Grid className={classes.tokenAreaUpperPart}>
            <Typography className={classes.tokenValue}>
              {formatNumbers(thresholdsWithTokenDecimal(Number(tokenB.decimal)))(
                `${tokenYPrintValue}`
              )}
              {showPrefix(tokenYPrintValue, prefixConfig)}
            </Typography>
            <Grid className={classes.token}>
              <img className={classes.iconSmall} src={tokenB.icon} alt={tokenB.name} />
              <Typography className={classes.tokenName}>{tokenB.name}</Typography>
            </Grid>
          </Grid>
          {showBalance ? (
            <Grid className={classes.tokenAreaLowerPart}>
              <div className={classes.tokenUSDValueWrapper}>
                {typeof tokenB.usdValue !== 'undefined' && tokenB.price ? (
                  <Tooltip
                    enterTouchDelay={0}
                    leaveTouchDelay={Number.MAX_SAFE_INTEGER}
                    title="Estimated USD Value of the Position's Tokens"
                    placement='bottom'
                    classes={{
                      tooltip: classes.tooltip
                    }}>
                    <Typography className={classes.tokenUSDValue}>
                      <span className="__symbol">{'~$ '}</span>
                      {formatNumber((tokenB.value * tokenB.price).toFixed(2))}
                      {showPrefix(tokenB.value * tokenB.price)}
                    </Typography>
                  </Tooltip>
                ) : null}
              </div>

              <Typography className={classes.tokenBalance}>
                Balance:{' '}
                {isBalanceLoading ? (
                  <img src={loadingAnimation} className={classes.loadingBalance} alt='Loading' />
                ) : (
                  formatNumber(tokenB.balance)
                )}{' '}
                {tokenB.name}
              </Typography>
            </Grid>
          ) : null}
        </Grid>
      </Grid>

      {onClickButton ? (
        <Button
          className={getButtonClasses({
            size: 'lg',
            layout: 'text-only',
            variant: 'primary'
          }, classes.violetButton)}
          variant='contained'
          onClick={onClickButton}
          disabled={
            Math.abs(Number(tokenA.value)) < 10 ** Number(-tokenA.decimal) &&
            Math.abs(Number(tokenB.value)) < 10 ** Number(-tokenB.decimal)
          }>
          Claim fee
        </Button>
      ) : null}
    </Grid>
  )
}
