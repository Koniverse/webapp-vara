import { Box, Button, Grid, Tooltip, Typography, useMediaQuery } from '@mui/material'
import { theme } from '@static/theme'
import { formatNumber, initialXtoY, tickerToAddress } from '@utils/utils'
import classNames from 'classnames'
import React, { useMemo, useState } from 'react'
import { useStyles } from './style'
import { TooltipHover } from '@components/TooltipHover/TooltipHover'
import { Network } from '@invariant-labs/vara-sdk'
import { getButtonClasses } from '@utils/uiUtils.ts'
import { ArrowsLeftRight, DotsThreeVertical } from '@phosphor-icons/react'

export interface IPositionItem {
  tokenXName: string
  tokenYName: string
  tokenXIcon: string
  tokenYIcon: string
  fee: number
  min: number
  max: number
  valueX: number
  valueY: number
  address: string
  id: number
  isActive?: boolean
  currentPrice: number
  tokenXLiq: number
  tokenYLiq: number
  network: Network
  isFullRange: boolean
  handleViewDetail?: VoidFunction
}

export const PositionItem: React.FC<IPositionItem> = ({
  tokenXName,
  tokenYName,
  tokenXIcon,
  tokenYIcon,
  fee,
  min,
  max,
  valueX,
  valueY,
  isActive = false,
  currentPrice,
  tokenXLiq,
  tokenYLiq,
  network,
  isFullRange,
  handleViewDetail
}) => {
  const { classes } = useStyles()

  const isXs = useMediaQuery(theme.breakpoints.down('xs'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  const [xToY, setXToY] = useState<boolean>(
    initialXtoY(tickerToAddress(network, tokenXName), tickerToAddress(network, tokenYName))
  )

  const getPercentageRatio = () => {
    const firstTokenPercentage =
      ((tokenXLiq * currentPrice) / (tokenYLiq + tokenXLiq * currentPrice)) * 100

    const tokenXPercentageFloat = xToY ? firstTokenPercentage : 100 - firstTokenPercentage
    const tokenXPercentage =
      tokenXPercentageFloat > 50
        ? Math.floor(tokenXPercentageFloat)
        : Math.ceil(tokenXPercentageFloat)

    const tokenYPercentage = 100 - tokenXPercentage

    return { tokenXPercentage, tokenYPercentage }
  }

  const { tokenXPercentage, tokenYPercentage } = getPercentageRatio()

  const feeFragment = useMemo(
    () => (
      <Tooltip
        enterTouchDelay={0}
        leaveTouchDelay={Number.MAX_SAFE_INTEGER}
        onClick={e => e.stopPropagation()}
        title={
          isActive ? (
            <>
              The position is <b>active</b> and currently <b>earning a fee</b> as long as the
              current price is <b>within</b> the position's price range.
            </>
          ) : (
            <>
              The position is <b>inactive</b> and <b>not earning a fee</b> as long as the current
              price is <b>outside</b> the position's price range.
            </>
          )
        }
        placement='top'
        classes={{
          tooltip: classes.tooltip
        }}>
        <Grid
          className={classNames(classes.fee, '__col __col-fee-tier', isActive ? classes.activeFee : undefined)}>

          <Typography
            className={classNames(classes.infoText, isActive ? classes.activeInfoText : undefined)}>
            {fee}%
          </Typography>
        </Grid>
      </Tooltip>
    ),
    [fee, classes, isActive]
  )

  const valueFragment = useMemo(
    () => (
      <Grid
        className={classNames(classes.value, '__col __col-value')}>
        <Typography>
          {formatNumber(xToY ? valueX : valueY)} {xToY ? tokenXName : tokenYName}
        </Typography>
      </Grid>
    ),
    [valueX, valueY, tokenXName, classes, isXs, isDesktop, tokenYName, xToY]
  )

  return (
    <Grid
      className={classes.root}
      container
      classes={{ container: classes.container, root: classes.listItemRoot }}
    >
      <div className={classNames(classes.iconsAndNames, '__col __col-token')}>
        <div className={classes.icons}>
          <img
            className={classes.tokenIcon}
            src={xToY ? tokenXIcon : tokenYIcon}
            alt={xToY ? tokenXName : tokenYName}
          />
          <TooltipHover text='Reverse tokens'>
            <Button
              onClick={e => {
                e.stopPropagation()
                setXToY(!xToY)
              }}
              startIcon={<ArrowsLeftRight />}
              className={getButtonClasses({
                size: 'xs',
                variant: 'ghost',
                layout: 'icon-only'
              }, classes.arrows)}>
            </Button>
          </TooltipHover>
          <img
            className={classes.tokenIcon}
            src={xToY ? tokenYIcon : tokenXIcon}
            alt={xToY ? tokenYName : tokenXName}
          />
        </div>

        <Typography className={classes.names}>
          {xToY ? tokenXName : tokenYName} - {xToY ? tokenYName : tokenXName}
        </Typography>
      </div>

      {feeFragment}

      <Grid
        className={classNames(classes.liquidity, '__col __col-token-ratio')}
      >
        <Typography className={classes.infoText}>
          {tokenXPercentage === 100 && (
            <span>
                {tokenXPercentage}
              {'%'} {xToY ? tokenXName : tokenYName}
              </span>
          )}
          {tokenYPercentage === 100 && (
            <span>
                {tokenYPercentage}
              {'%'} {xToY ? tokenYName : tokenXName}
              </span>
          )}

          {tokenYPercentage !== 100 && tokenXPercentage !== 100 && (
            <span>
                {tokenXPercentage}
              {'%'} {xToY ? tokenXName : tokenYName} {' - '} {tokenYPercentage}
              {'%'} {xToY ? tokenYName : tokenXName}
              </span>
          )}
        </Typography>
      </Grid>

      {valueFragment}

      <Grid
        className={classNames(classes.minMax, '__col __col-price-range')}
      >
        <div className={'__col-content'}>
          <span className={'__label'}>
            MIN - MAX:&nbsp;
          </span>

          {isFullRange ? (
            <span>FULL RANGE</span>
          ) : (
            <span>
              {formatNumber(xToY ? min : 1 / max)} - {formatNumber(xToY ? max : 1 / min)}{' '}
                {xToY ? tokenYName : tokenXName} per {xToY ? tokenXName : tokenYName}
            </span>
          )}
        </div>
      </Grid>

      <Box className={classNames('__col __col-action')}>
        <TooltipHover text='View detail'>
          <button className={getButtonClasses({
            size: 'xs',
            layout: 'icon-only',
            variant: 'primary'
          }, classes.actionButton)} onClick={handleViewDetail}>
            <DotsThreeVertical className={'__button-icon'} />
          </button>
        </TooltipHover>
      </Box>
    </Grid>
  )
}
