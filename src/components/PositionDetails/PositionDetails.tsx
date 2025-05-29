import MarketIdLabel from '@components/NewPosition/MarketIdLabel/MarketIdLabel'
import SinglePositionInfo from '@components/PositionDetails/SinglePositionInfo/SinglePositionInfo'
import SinglePositionPlot from '@components/PositionDetails/SinglePositionPlot/SinglePositionPlot'
import { TickPlotPositionData } from '@components/PriceRangePlot/PriceRangePlot'
import Refresher from '@components/Refresher/Refresher'
import { PERCENTAGE_SCALE } from '@invariant-labs/vara-sdk/target/consts'
import { Box, Button, Grid, Hidden, Typography } from '@mui/material'
import { REFRESHER_INTERVAL } from '@store/consts/static'
import { addressToTicker, initialXtoY, parseFeeToPathFee, printBigint } from '@utils/utils'
import { PlotTickData } from '@store/reducers/positions'
import { VariantType } from 'notistack'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ILiquidityToken } from './SinglePositionInfo/consts'
import { useStyles } from './style'
import { TokenPriceData } from '@store/consts/types'
import { TooltipHover } from '@components/TooltipHover/TooltipHover'
import { Network } from '@invariant-labs/vara-sdk'
import { getButtonClasses } from '@utils/uiUtils.ts'
import { ArrowLeft, Plus } from '@phosphor-icons/react'

interface IProps {
  tokenXAddress: string
  tokenYAddress: string
  poolAddress: string
  copyPoolAddressHandler: (message: string, variant: VariantType) => void
  detailsData: PlotTickData[]
  leftRange: TickPlotPositionData
  rightRange: TickPlotPositionData
  midPrice: TickPlotPositionData
  currentPrice: number
  tokenX: ILiquidityToken
  tokenY: ILiquidityToken
  tokenXPriceData?: TokenPriceData
  tokenYPriceData?: TokenPriceData
  onClickClaimFee: () => void
  closePosition: (claimFarmRewards?: boolean) => void
  ticksLoading: boolean
  tickSpacing: bigint
  fee: bigint
  min: number
  max: number
  showFeesLoader?: boolean
  hasTicksError?: boolean
  reloadHandler: () => void
  userHasStakes?: boolean
  onRefresh: () => void
  isBalanceLoading: boolean
  network: Network
}

const PositionDetails: React.FC<IProps> = ({
  tokenXAddress,
  tokenYAddress,
  poolAddress,
  copyPoolAddressHandler,
  detailsData,
  leftRange,
  rightRange,
  midPrice,
  currentPrice,
  tokenY,
  tokenX,
  tokenXPriceData,
  tokenYPriceData,
  onClickClaimFee,
  closePosition,
  ticksLoading,
  tickSpacing,
  fee,
  min,
  max,
  showFeesLoader = false,
  hasTicksError,
  reloadHandler,
  userHasStakes = false,
  onRefresh,
  isBalanceLoading,
  network
}) => {
  const { classes } = useStyles()

  const navigate = useNavigate()

  const [xToY, setXToY] = useState<boolean>(
    initialXtoY(tokenXAddress.toString(), tokenYAddress.toString())
  )
  const [refresherTime, setRefresherTime] = useState<number>(REFRESHER_INTERVAL)

  const isActive = midPrice.x >= min && midPrice.x <= max

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (refresherTime > 0) {
        setRefresherTime(refresherTime - 1)
      } else {
        onRefresh()
        setRefresherTime(REFRESHER_INTERVAL)
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [refresherTime])

  return (
    <div className={classes.mainContainer}>
      <div className={classes.backWrapper}>
        <Link to='/liquidity' style={{ textDecoration: 'none' }}>
          <Grid className={classes.back} container item alignItems='center'>
            <ArrowLeft className={classes.backIcon} />

            <Typography className={classes.backText}>Positions</Typography>
          </Grid>
        </Link>
      </div>

      <Grid container className={classes.wrapperContainer} wrap='nowrap'>
        <Grid className={classes.positionDetails} container item direction='column'>
          <Grid container width='auto' className={classes.marketIdWithRefresher}>
            <Hidden mdUp>
              <MarketIdLabel
                marketId={poolAddress.toString()}
                displayLength={7}
                copyPoolAddressHandler={copyPoolAddressHandler}
                style={{ paddingRight: 10 }}
              />
              <TooltipHover text='Refresh'>
                <Refresher
                  currentIndex={refresherTime}
                  maxIndex={REFRESHER_INTERVAL}
                  onClick={() => {
                    onRefresh()
                    setRefresherTime(REFRESHER_INTERVAL)
                  }}
                />
              </TooltipHover>
            </Hidden>
          </Grid>

          <SinglePositionInfo
            fee={+printBigint(fee, PERCENTAGE_SCALE - 2n)}
            onClickClaimFee={onClickClaimFee}
            closePosition={closePosition}
            tokenX={tokenX}
            tokenY={tokenY}
            tokenXPriceData={tokenXPriceData}
            tokenYPriceData={tokenYPriceData}
            xToY={xToY}
            swapHandler={() => setXToY(!xToY)}
            showFeesLoader={showFeesLoader}
            userHasStakes={userHasStakes}
            isBalanceLoading={isBalanceLoading}
            isActive={isActive}
            network={network}
          />
        </Grid>

        <Grid
          container
          item
          direction='column'
          alignItems='flex-end'
          className={classes.right}
          wrap='nowrap'>
          <Grid className={classes.positionPlotWrapper}>
            <Grid
              container
              item
              direction='row'
              alignItems='center'
              flexDirection='row-reverse'
              className={classes.rightHeaderWrapper}
              wrap='nowrap'>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button
                  className={getButtonClasses({
                    size: 'sm',
                    variant: 'primary',
                    layout: 'text-only'
                  }, classes.button)}
                  variant='contained'
                  startIcon={<Plus />}
                  onClick={() => {
                    const parsedFee = parseFeeToPathFee(fee)
                    const address1 = addressToTicker(network, tokenXAddress.toString())
                    const address2 = addressToTicker(network, tokenYAddress.toString())

                    navigate(`/newPosition/${address1}/${address2}/${parsedFee}`)
                  }}>
                  Add Position
                </Button>
              </Box>
              <Hidden mdDown>
                <TooltipHover text='Refresh'>
                  <Grid mr={2} ml='auto' display='flex' justifyContent='center'>
                    <Refresher
                      currentIndex={refresherTime}
                      maxIndex={REFRESHER_INTERVAL}
                      onClick={() => {
                        onRefresh()
                        setRefresherTime(REFRESHER_INTERVAL)
                      }}
                    />
                  </Grid>
                </TooltipHover>
                <MarketIdLabel
                  marketId={poolAddress.toString()}
                  displayLength={9}
                  copyPoolAddressHandler={copyPoolAddressHandler}
                  style={{ padding: '8px 8px 0 0px', flex: 1 }}
                />
              </Hidden>
            </Grid>
            <SinglePositionPlot
              data={
                detailsData.length
                  ? xToY
                    ? detailsData
                    : detailsData.map(tick => ({ ...tick, x: 1 / tick.x })).reverse()
                  : Array(100)
                      .fill(1)
                      .map((_e, index) => ({ x: index, y: index, index: BigInt(index) }))
              }
              leftRange={xToY ? leftRange : { ...rightRange, x: 1 / rightRange.x }}
              rightRange={xToY ? rightRange : { ...leftRange, x: 1 / leftRange.x }}
              midPrice={{
                ...midPrice,
                x: midPrice.x ** (xToY ? 1 : -1)
              }}
              currentPrice={currentPrice ** (xToY ? 1 : -1)}
              tokenY={tokenY}
              tokenX={tokenX}
              ticksLoading={ticksLoading}
              tickSpacing={tickSpacing}
              min={xToY ? min : 1 / max}
              max={xToY ? max : 1 / min}
              xToY={xToY}
              hasTicksError={hasTicksError}
              reloadHandler={reloadHandler}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default PositionDetails
