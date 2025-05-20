import { Pagination, PaginationItem, useMediaQuery } from '@mui/material'
import { theme } from '@static/theme'
import { useStyles } from './style'
import { PaginationRenderItemParams } from '@mui/material/Pagination/Pagination'
import classNames from 'classnames'

export interface IPaginationList {
  pages: number
  defaultPage: number
  handleChangePage: (page: number) => void
  variant: string
  page?: number
}

export const PaginationList: React.FC<IPaginationList> = ({
  pages,
  defaultPage,
  handleChangePage,
  variant,
  page
}) => {
  const { classes } = useStyles()
  const position = useMediaQuery(theme.breakpoints.down('sm'))
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const renderItem = (params: PaginationRenderItemParams) => {
    const buttonClass = classNames(classes.button, {
      '-prev': params.type === 'previous',
      '-next': params.type === 'next',
      '-page': params.type === 'page',
      '-ellipsis': params.type === 'start-ellipsis' || params.type === 'end-ellipsis',
      '-non-interactive': params.type === 'start-ellipsis' || params.type === 'end-ellipsis'
    })

    return (
      <PaginationItem
        {...params}
        slots={{
          next: () => 'Next',
          previous: () => 'Previous',
        }}
        className={buttonClass}
      />
    )
  }

  return (
    <div className={classes.root} style={{ justifyContent: position ? 'center' : `${variant}` }}>
      <Pagination
        count={pages}
        shape='rounded'
        defaultPage={defaultPage}
        onChange={(_e, page) => handleChangePage(page)}
        siblingCount={matches ? 0 : 1}
        page={page}
        renderItem={renderItem}
      />
    </div>
  )
}
