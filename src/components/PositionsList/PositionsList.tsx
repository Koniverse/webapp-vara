import { EmptyPlaceholder } from '@components/EmptyPlaceholder/EmptyPlaceholder'
import { INoConnected, NoConnected } from '@components/NoConnected/NoConnected'
import { PaginationList } from '@components/PaginationList/PaginationList'
import { Button, Grid, InputAdornment, InputBase, Typography, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IPositionItem, PositionItem } from './PositionItem/PositionItem'
import { useStyles } from './style'
import { POSITIONS_PER_QUERY } from '@store/consts/static'
import { TooltipHover } from '@components/TooltipHover/TooltipHover'
import { getButtonClasses } from '@utils/uiUtils.ts'
import { ArrowsCounterClockwise, MagnifyingGlass, Plus } from '@phosphor-icons/react'
import { PositionListHeader } from '@components/PositionsList/PositionItem/PositionListHeader.tsx'
import classNames from 'classnames'
import { theme } from '@static/theme'
import images from '@static/images.ts'

interface IProps {
  initialPage: number
  className?: string
  setLastPage: (page: number) => void
  data: IPositionItem[]
  onAddPositionClick: () => void
  loading?: boolean
  showNoConnected?: boolean
  noConnectedBlockerProps: INoConnected
  itemsPerPage: number
  searchValue: string
  searchSetValue: (value: string) => void
  handleRefresh: () => void
  pageChanged: (page: number) => void
  length: bigint
  loadedPages: Record<number, boolean>
  getRemainingPositions: () => void
  noInitialPositions: boolean
}

export const PositionsList: React.FC<IProps> = ({
  initialPage,
  className,
  setLastPage,
  data,
  onAddPositionClick,
  loading = false,
  showNoConnected = false,
  noConnectedBlockerProps,
  itemsPerPage,
  searchValue,
  searchSetValue,
  handleRefresh,
  pageChanged,
  length,
  loadedPages,
  getRemainingPositions,
  noInitialPositions
}) => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const [defaultPage] = useState(initialPage)
  const [page, setPage] = useState(initialPage)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Object.keys(loadedPages).length * POSITIONS_PER_QUERY < Number(length)) {
      getRemainingPositions()
    }

    searchSetValue(e.target.value.toLocaleLowerCase())
  }

  const handleChangePagination = (page: number): void => {
    setLastPage(page)
    setPage(page)
  }

  const paginator = (currentPage: number) => {
    const page = currentPage || 1
    const perPage = itemsPerPage || 10
    const offset = (page - 1) * perPage
    const paginatedItems = data.slice(offset).slice(0, itemsPerPage)
    const totalPages = Math.ceil(data.length / perPage)

    return {
      page: page,
      totalPages: totalPages,
      data: paginatedItems
    }
  }

  useEffect(() => {
    setPage(1)
  }, [searchValue])

  useEffect(() => {
    setPage(initialPage)
  }, [])

  useEffect(() => {
    handleChangePagination(initialPage)
  }, [initialPage])

  useEffect(() => {
    pageChanged(page)
  }, [page])

  return (
    <Grid container direction='column' className={classNames(classes.root, className)}>
      <Grid
        className={classes.blockHeader}
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'>
        <Grid className={classes.titleWrapper}>
          <Typography className={classes.title}>Your Positions</Typography>
        </Grid>

        <Grid className={classes.searchWrapper}>
          <TooltipHover text='Refresh'>
            <Button
              disabled={showNoConnected}
              onClick={showNoConnected ? () => {} : handleRefresh}
              startIcon={<ArrowsCounterClockwise />}
              className={getButtonClasses({
                size: isMobile ? 'xs' : 'sm',
                variant: 'ghost',
                layout: 'icon-only'
              }, classes.refreshIconBtn)}>
            </Button>
          </TooltipHover>

          {
            !isMobile && (
              <InputBase
                type={'text'}
                className={classes.searchBar}
                placeholder='Search position'
                startAdornment={
                  <InputAdornment position='start'>
                    <MagnifyingGlass className={classes.searchIcon} />
                  </InputAdornment>
                }
                onChange={handleChangeInput}
                value={searchValue}
                disabled={noInitialPositions}
              />
            )
          }

          <Button
            className={getButtonClasses({
              size: isMobile ? 'xs' : 'sm',
              variant: 'primary',
              layout: 'text-only'
            }, classes.button)}
            startIcon={<Plus />}
            variant='contained'
            onClick={onAddPositionClick}>
            Add Position
          </Button>
        </Grid>

        {
          isMobile && (
            <div className={classes.mobileSearchBarWrapper}>
              <InputBase
                type={'text'}
                className={classes.searchBar}
                placeholder='Search position'
                startAdornment={
                  <InputAdornment position='start'>
                    <MagnifyingGlass className={classes.searchIcon} />
                  </InputAdornment>
                }
                onChange={handleChangeInput}
                value={searchValue}
                disabled={noInitialPositions}
              />
            </div>
          )
        }
      </Grid>

      <Grid container direction='column' className={classes.list} justifyContent='flex-start'>
        <div className={classes.listInner}>
          <PositionListHeader className={classes.listHeader} />

          {data.length > 0 && !loading ? (
            paginator(page).data.map((element) => (
              <PositionItem key={element.address + element.id} {...element} handleViewDetail={() => {
                navigate(`/position/${element.address}/${element.id}`)
              }}
              />
            ))
          ) : showNoConnected ? (
            <NoConnected {...noConnectedBlockerProps} />
          ) : loading ? (
            <Grid container style={{ flex: 1 }} className={classes.loadingWrapper}>
              <img src={images.loading} className={classes.loading} alt='Loader' />
            </Grid>
          ) : (
            <EmptyPlaceholder
              desc={
                noInitialPositions
                  ? 'Add your first position by pressing the button and start earning!'
                  : 'Did not find any matching positions'
              }
              className={classes.placeholder}
              onAction={onAddPositionClick}
              withButton={noInitialPositions}
            />
          )}
        </div>
      </Grid>
      {paginator(page).totalPages > 1 ? (
        <Grid className={classes.pagination}>
          <PaginationList
            pages={paginator(page).totalPages}
            defaultPage={defaultPage}
            handleChangePage={handleChangePagination}
            variant='end'
            page={page}
          />
        </Grid>
      ) : null}
    </Grid>
  )
}
