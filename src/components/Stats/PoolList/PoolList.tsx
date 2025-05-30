import React, { useMemo, useEffect } from 'react'

import PoolListItem from '@components/Stats/PoolListItem/PoolListItem'
import { useStyles } from './style'
import { Grid } from '@mui/material'
import { PaginationList } from '@components/PaginationList/PaginationList'
import { SortTypePoolList } from '@store/consts/static'
import { HexString, Network } from '@invariant-labs/vara-sdk'

interface PoolListInterface {
  data: Array<{
    symbolFrom: string
    symbolTo: string
    iconFrom: string
    iconTo: string
    volume: number
    TVL: number
    fee: number
    addressFrom: HexString
    addressTo: HexString
    // apy: number
    // apyData: {
    //   fees: number
    //   accumulatedFarmsAvg: number
    //   accumulatedFarmsSingleTick: number
    // }
    isUnknownFrom: boolean
    isUnknownTo: boolean
  }>
  network: Network
}

const PoolList: React.FC<PoolListInterface> = ({ data, network }) => {
  const { classes } = useStyles()
  const [page, setPage] = React.useState(1)
  const [sortType, setSortType] = React.useState(SortTypePoolList.VOLUME_DESC)

  const sortedData = useMemo(() => {
    switch (sortType) {
      case SortTypePoolList.NAME_ASC:
        return data.sort((a, b) =>
          `${a.symbolFrom}/${a.symbolTo}`.localeCompare(`${b.symbolFrom}/${b.symbolTo}`)
        )
      case SortTypePoolList.NAME_DESC:
        return data.sort((a, b) =>
          `${b.symbolFrom}/${b.symbolTo}`.localeCompare(`${a.symbolFrom}/${a.symbolTo}`)
        )
      case SortTypePoolList.FEE_ASC:
        return data.sort((a, b) => a.fee - b.fee)
      case SortTypePoolList.FEE_DESC:
        return data.sort((a, b) => b.fee - a.fee)
      case SortTypePoolList.VOLUME_ASC:
        return data.sort((a, b) => (a.volume === b.volume ? a.TVL - b.TVL : a.volume - b.volume))
      case SortTypePoolList.VOLUME_DESC:
        return data.sort((a, b) => (a.volume === b.volume ? b.TVL - a.TVL : b.volume - a.volume))
      case SortTypePoolList.TVL_ASC:
        return data.sort((a, b) => (a.TVL === b.TVL ? a.volume - b.volume : a.TVL - b.TVL))
      case SortTypePoolList.TVL_DESC:
        return data.sort((a, b) => (a.TVL === b.TVL ? b.volume - a.volume : b.TVL - a.TVL))
      // case SortType.APY_ASC:
      //   return data.sort((a, b) => a.apy - b.apy)
      // case SortType.APY_DESC:
      //   return data.sort((a, b) => b.apy - a.apy)
    }
  }, [data, sortType])

  useEffect(() => {
    setPage(1)
  }, [data])

  const handleChangePagination = (currentPage: number) => setPage(currentPage)

  const paginator = (currentPage: number) => {
    const page = currentPage || 1
    const perPage = 10
    const offest = (page - 1) * perPage

    return sortedData.slice(offest).slice(0, perPage)
  }

  const pages = Math.ceil(data.length / 10)

  return (
    <Grid container direction='column' classes={{ root: classes.container }}>
      <PoolListItem displayType='header' onSort={setSortType} sortType={sortType} />
      {paginator(page).map((element, index) => (
        <PoolListItem
          displayType='token'
          tokenIndex={index + 1 + (page - 1) * 10}
          symbolFrom={element.symbolFrom}
          symbolTo={element.symbolTo}
          iconFrom={element.iconFrom}
          iconTo={element.iconTo}
          volume={element.volume}
          TVL={element.TVL}
          fee={element.fee}
          hideBottomLine={pages === 1 && index + 1 === data.length}
          // apy={element.apy}
          // apyData={element.apyData}
          key={index}
          addressFrom={element.addressFrom}
          addressTo={element.addressTo}
          network={network}
          isUnknownFrom={element.isUnknownFrom}
          isUnknownTo={element.isUnknownTo}
        />
      ))}
      {pages > 1 ? (
        <Grid className={classes.pagination}>
          <PaginationList
            pages={pages}
            defaultPage={1}
            handleChangePage={handleChangePagination}
            variant='flex-end'
          />
        </Grid>
      ) : null}
    </Grid>
  )
}

export default PoolList
