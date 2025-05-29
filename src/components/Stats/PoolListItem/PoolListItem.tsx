import React from 'react'
import { useStyles } from './style'
import { Box, Grid, Typography } from '@mui/material'
import { addressToTicker, formatNumber, parseFeeToPathFee } from '@utils/utils'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { useNavigate } from 'react-router-dom'
import icons from '@static/icons'
import { SortTypePoolList } from '@store/consts/static'
import { HexString, Network, PERCENTAGE_SCALE } from '@invariant-labs/vara-sdk'
import { TooltipHover } from '@components/TooltipHover/TooltipHover'
import classNames from 'classnames'
import { ArrowsLeftRight, Plus } from '@phosphor-icons/react'
import { getButtonClasses } from '@utils/uiUtils.ts'

interface IProps {
  TVL?: number
  volume?: number
  fee?: number
  displayType: string
  symbolFrom?: string
  symbolTo?: string
  iconFrom?: string
  iconTo?: string
  tokenIndex?: number
  sortType?: SortTypePoolList
  onSort?: (type: SortTypePoolList) => void
  hideBottomLine?: boolean
  addressFrom?: HexString
  addressTo?: HexString
  network?: Network
  // apy?: number
  // apyData?: {
  //   fees: number
  //   accumulatedFarmsAvg: number
  //   accumulatedFarmsSingleTick: number
  // }
  isUnknownFrom?: boolean
  isUnknownTo?: boolean
}

const PoolListItem: React.FC<IProps> = ({
  fee = 0,
  volume = 0,
  TVL = 0,
  displayType,
  symbolFrom,
  symbolTo,
  iconFrom,
  iconTo,
  tokenIndex,
  sortType,
  onSort,
  hideBottomLine = false,
  addressFrom,
  addressTo,
  network,
  // apy = 0,
  // apyData = {
  //   fees: 0,
  //   accumulatedFarmsAvg: 0,
  //   accumulatedFarmsSingleTick: 0
  // }
  isUnknownFrom,
  isUnknownTo
}) => {
  const { classes } = useStyles()

  const navigate = useNavigate()
  // const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const isSm = false;

  const handleOpenPosition = () => {
    navigate(
      `/newPosition/${addressToTicker(network ?? Network.Testnet, addressFrom ?? '')}/${addressToTicker(network ?? Network.Testnet, addressTo ?? '')}/${parseFeeToPathFee(BigInt(Math.round(fee * 10 ** Number(PERCENTAGE_SCALE - 2n))))}`
    )
  }

  const handleOpenSwap = () => {
    navigate(
      `/exchange/${addressToTicker(network ?? Network.Testnet, addressFrom ?? '')}/${addressToTicker(network ?? Network.Testnet, addressTo ?? '')}`
    )
  }

  return (
    <>
      {displayType === 'token' ? (
        <Grid
          container
          classes={{ container: classes.container, root: classes.poolListItemRoot }}
          style={hideBottomLine ? { border: 'none' } : undefined}>
          {!isSm ? <Typography className={'__col __col-no'}>{tokenIndex}</Typography> : null}
          <Grid className={classNames(classes.imageContainer, '__col __col-name')}>
            {!isSm && (
              <Box className={classes.iconsWrapper}>
                <Box className={classes.iconContainer}>
                  <img className={classNames(classes.tokenIcon, '__token-icon')} src={iconFrom} alt='Token from' />
                  {isUnknownFrom && <img className={classes.warningIcon} src={icons.warningIcon} />}
                </Box>
                <Box className={classes.iconContainer}>
                  <img className={classNames(classes.tokenIcon, '__token-icon')} src={iconTo} alt='Token to' />
                  {isUnknownTo && <img className={classes.warningIcon} src={icons.warningIcon} />}
                </Box>
              </Box>
            )}
            <Grid className={classes.symbolsContainer}>
              <Typography>
                {symbolFrom}/{symbolTo}
              </Typography>
            </Grid>
          </Grid>
          {/* {!isSm ? (
            <Typography>
              {`${apy > 1000 ? '>1000' : apy.toFixed(2)}%`}
              <Tooltip
                enterTouchDelay={0}
                leaveTouchDelay={Number.MAX_SAFE_INTEGER}
                title={
                  <>
                    <Typography className={classes.liquidityTitle}>Pool APY</Typography>
                    <Typography className={classes.liquidityDesc}>
                      Pool fees: {`${apyData.fees > 1000 ? '>1000' : apyData.fees.toFixed(2)}%`}
                      {apyData.accumulatedFarmsAvg > 0 ? (
                        <>
                          <br />+ All farms rewards with single tick position:{' '}
                          {`${
                            apyData.accumulatedFarmsSingleTick > 1000
                              ? '>1000'
                              : apyData.accumulatedFarmsSingleTick.toFixed(2)
                          }%`}
                          <br />
                          (All farms rewards with average position:{' '}
                          {`${
                            apyData.accumulatedFarmsAvg > 1000
                              ? '>1000'
                              : apyData.accumulatedFarmsAvg.toFixed(2)
                          }%`}
                          )
                        </>
                      ) : null}
                    </Typography>
                  </>
                }
                placement='bottom'
                classes={{
                  tooltip: classes.liquidityTooltip
                }}>
                <span className={classes.activeLiquidityIcon}>i</span>
              </Tooltip>
            </Typography>
          ) : null} */}
          <Typography className={'__col __col-fee'}>{fee}%</Typography>
          <Typography className={'__col __col-volume'}>{`$${formatNumber(volume)}`}</Typography>
          <Typography className={'__col __col-tvl'}>{`$${formatNumber(TVL)}`}</Typography>
          {!isSm && (
            <Box className={classNames(classes.action, '__col __col-action')}>
              <TooltipHover text='Exchange'>
                <button className={getButtonClasses({
                  size: 'xxs',
                  layout: 'icon-only',
                  variant: 'primary'
                }, classes.actionButton)} onClick={handleOpenSwap}>
                  <ArrowsLeftRight className={'__button-icon'} />
                </button>
              </TooltipHover>
              <TooltipHover text='Add position'>
                <button className={getButtonClasses({
                  size: 'xxs',
                  layout: 'icon-only',
                  variant: 'primary'
                }, classes.actionButton)} onClick={handleOpenPosition}>
                  <Plus className={'__button-icon'} />
                </button>
              </TooltipHover>
            </Box>
          )}
        </Grid>
      ) : (
        <Grid container classes={{ container: classes.container, root: classes.headerRoot }}>
          {!isSm && (
            <Typography className={'__col __col-no'}>
              No
            </Typography>
          )}
          <Typography
            style={{ cursor: 'pointer' }}
            className={'__col __col-name'}
            onClick={() => {
              if (sortType === SortTypePoolList.NAME_ASC) {
                onSort?.(SortTypePoolList.NAME_DESC)
              } else {
                onSort?.(SortTypePoolList.NAME_ASC)
              }
            }}>
            Name
            {sortType === SortTypePoolList.NAME_ASC ? (
              <ArrowDropUpIcon className={classes.icon} />
            ) : sortType === SortTypePoolList.NAME_DESC ? (
              <ArrowDropDownIcon className={classes.icon} />
            ) : null}
          </Typography>
          {/* {!isXs ? (
            <Typography
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (sortType === SortType.APY_DESC) {
                  onSort?.(SortType.APY_ASC)
                } else {
                  onSort?.(SortType.APY_DESC)
                }
              }}>
              APY
              {sortType === SortType.APY_ASC ? (
                <ArrowDropUpIcon className={classes.icon} />
              ) : sortType === SortType.APY_DESC ? (
                <ArrowDropDownIcon className={classes.icon} />
              ) : null}
            </Typography>
          ) : null} */}
          <Typography
            style={{ cursor: 'pointer' }}
            className={'__col __col-fee'}
            onClick={() => {
              if (sortType === SortTypePoolList.FEE_ASC) {
                onSort?.(SortTypePoolList.FEE_DESC)
              } else {
                onSort?.(SortTypePoolList.FEE_ASC)
              }
            }}>
            Fee
            {sortType === SortTypePoolList.FEE_ASC ? (
              <ArrowDropUpIcon className={classes.icon} />
            ) : sortType === SortTypePoolList.FEE_DESC ? (
              <ArrowDropDownIcon className={classes.icon} />
            ) : null}
          </Typography>
          <Typography
            style={{ cursor: 'pointer' }}
            className={'__col __col-volume'}
            onClick={() => {
              if (sortType === SortTypePoolList.VOLUME_DESC) {
                onSort?.(SortTypePoolList.VOLUME_ASC)
              } else {
                onSort?.(SortTypePoolList.VOLUME_DESC)
              }
            }}>
            Volume 24H
            {sortType === SortTypePoolList.VOLUME_ASC ? (
              <ArrowDropUpIcon className={classes.icon} />
            ) : sortType === SortTypePoolList.VOLUME_DESC ? (
              <ArrowDropDownIcon className={classes.icon} />
            ) : null}
          </Typography>
          <Typography
            style={{ cursor: 'pointer' }}
            className={'__col __col-tvl'}
            onClick={() => {
              if (sortType === SortTypePoolList.TVL_DESC) {
                onSort?.(SortTypePoolList.TVL_ASC)
              } else {
                onSort?.(SortTypePoolList.TVL_DESC)
              }
            }}>
            TVL
            {sortType === SortTypePoolList.TVL_ASC ? (
              <ArrowDropUpIcon className={classes.icon} />
            ) : sortType === SortTypePoolList.TVL_DESC ? (
              <ArrowDropDownIcon className={classes.icon} />
            ) : null}
          </Typography>
          {!isSm && <Typography align='right' className={'__col __col-action'}>Action</Typography>}
        </Grid>
      )}
    </>
  )
}

export default PoolListItem
