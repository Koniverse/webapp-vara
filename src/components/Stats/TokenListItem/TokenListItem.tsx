import React from 'react'
import { theme } from '@static/theme'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { useStyles } from './style'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { formatNumber } from '@utils/utils'
import { SortTypeTokenList } from '@store/consts/static'
import icons from '@static/icons'
import classNames from 'classnames'

interface IProps {
  displayType: string
  itemNumber?: number
  icon?: string
  name?: string
  symbol?: string
  price?: number
  // priceChange?: number
  volume?: number
  TVL?: number
  sortType?: SortTypeTokenList
  onSort?: (type: SortTypeTokenList) => void
  hideBottomLine?: boolean
  isUnknown?: boolean
}

const TokenListItem: React.FC<IProps> = ({
  displayType,
  itemNumber = 0,
  icon = 'BTCIcon',
  name = 'Bitcoin',
  symbol = 'BTCIcon',
  price = 0,
  // priceChange = 0,
  volume = 0,
  TVL = 0,
  sortType,
  onSort,
  hideBottomLine = false,
  isUnknown
}) => {
  const { classes } = useStyles()
  // const isNegative = priceChange < 0

  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const hideName = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <>
      {displayType === 'tokens' ? (
        <Grid
          container
          classes={{ container: classes.container, root: classes.tokenListItemRoot }}
          style={hideBottomLine ? { marginBottom: 0 } : undefined}>
          {!hideName && !isSm && <Typography component='p' className={'__col __col-no'}>{itemNumber}</Typography>}
          <Grid className={classNames(classes.tokenName, '__col __col-name')}>
            {!isSm && (
              <Box className={classes.imageContainer}>
                <img className={classes.tokenIcon} src={icon} alt='Token icon'></img>
                {isUnknown && <img className={classes.warningIcon} src={icons.warningIcon} />}
              </Box>
            )}
            <Typography>
              {hideName ? symbol : name}
              {!hideName && <span className={classes.tokenSymbol}>{` (${symbol})`}</span>}
            </Typography>
          </Grid>
          <Typography className={'__col __col-price'}>{`~$${formatNumber(price)}`}</Typography>

          {/* {!hideName && (
            <Typography style={{ color: isNegative ? colors.invariant.Error : colors.green.main }}>
              {isNegative ? `${priceChange.toFixed(2)}%` : `+${priceChange.toFixed(2)}%`}
            </Typography>
          )} */}
          <Typography className={'__col __col-volume'}>{`$${formatNumber(volume)}`}</Typography>
          <Typography className={'__col __col-tvl'}>{`$${formatNumber(TVL)}`}</Typography>
        </Grid>
      ) : (
        <Grid
          container
          classes={{ container: classes.container, root: classes.headerRoot }}>
          {!hideName && !isSm && (
            <Typography className={'__col __col-no'}>
              No
            </Typography>
          )}
          <Typography
            style={{ cursor: 'pointer' }}
            className={'__col __col-name'}
            onClick={() => {
              if (sortType === SortTypeTokenList.NAME_ASC) {
                onSort?.(SortTypeTokenList.NAME_DESC)
              } else {
                onSort?.(SortTypeTokenList.NAME_ASC)
              }
            }}>
            Name
            {sortType === SortTypeTokenList.NAME_ASC ? (
              <ArrowDropUpIcon className={classes.icon} />
            ) : sortType === SortTypeTokenList.NAME_DESC ? (
              <ArrowDropDownIcon className={classes.icon} />
            ) : null}
          </Typography>
          <Typography
            style={{ cursor: 'pointer' }}
            className={'__col __col-price'}
            onClick={() => {
              if (sortType === SortTypeTokenList.PRICE_ASC) {
                onSort?.(SortTypeTokenList.PRICE_DESC)
              } else {
                onSort?.(SortTypeTokenList.PRICE_ASC)
              }
            }}>
            Price
            {sortType === SortTypeTokenList.PRICE_ASC ? (
              <ArrowDropUpIcon className={classes.icon} />
            ) : sortType === SortTypeTokenList.PRICE_DESC ? (
              <ArrowDropDownIcon className={classes.icon} />
            ) : null}
          </Typography>
          {/* {!hideName && (
            <Typography
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (sortType === SortTypeTokenList.CHANGE_ASC) {
                  onSort?.(SortTypeTokenList.CHANGE_DESC)
                } else {
                  onSort?.(SortTypeTokenList.CHANGE_ASC)
                }
              }}>
              Price change
              {sortType === SortTypeTokenList.CHANGE_ASC ? (
                <ArrowDropUpIcon className={classes.icon} />
              ) : sortType === SortTypeTokenList.CHANGE_DESC ? (
                <ArrowDropDownIcon className={classes.icon} />
              ) : null}
            </Typography>
          )} */}
          <Typography
            className={'__col __col-volume'}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (sortType === SortTypeTokenList.VOLUME_DESC) {
                onSort?.(SortTypeTokenList.VOLUME_ASC)
              } else {
                onSort?.(SortTypeTokenList.VOLUME_DESC)
              }
            }}>
            Volume 24H
            {sortType === SortTypeTokenList.VOLUME_ASC ? (
              <ArrowDropUpIcon className={classes.icon} />
            ) : sortType === SortTypeTokenList.VOLUME_DESC ? (
              <ArrowDropDownIcon className={classes.icon} />
            ) : null}
          </Typography>
          <Typography
            className={'__col __col-tvl'}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (sortType === SortTypeTokenList.TVL_DESC) {
                onSort?.(SortTypeTokenList.TVL_ASC)
              } else {
                onSort?.(SortTypeTokenList.TVL_DESC)
              }
            }}>
            TVL
            {sortType === SortTypeTokenList.TVL_ASC ? (
              <ArrowDropUpIcon className={classes.icon} />
            ) : sortType === SortTypeTokenList.TVL_DESC ? (
              <ArrowDropDownIcon className={classes.icon} />
            ) : null}
          </Typography>
        </Grid>
      )}
    </>
  )
}
export default TokenListItem
