import { Button, Grid, Typography } from '@mui/material'
import classNames from 'classnames'
import { useStyles } from './style'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Plugs } from '@phosphor-icons/react'
import { getButtonClasses } from '@utils/uiUtils.ts'

export interface INoConnected {
  onConnect: () => void
  title?: string
  descCustomText?: string
  className?: string
}

export const NoConnected: React.FC<INoConnected> = ({ onConnect, title, descCustomText, className }) => {
  const { classes } = useStyles()

  const navigate = useNavigate()

  return (
    <>
      <Grid className={classNames(classes.container, className)}>
        <div className={classes.iconWrapper}>
          <Plugs weight={'fill'} />
        </div>

        {!!title && <Typography className={classes.title}>{title}</Typography>}

        {descCustomText?.length && (
          <Typography className={classes.desc}>{descCustomText}</Typography>
        )}
        <Button
          className={getButtonClasses(
            {
              size: 'lg',
              variant: 'primary',
              layout: 'text-only'
            },
            `${classes.button} ${classes.buttonPrimary}`
          )}
          onClick={() => {
            navigate('/newPosition/0_01')
          }}
          variant='contained'>
          Explore pools
        </Button>

        <Button
          className={getButtonClasses(
            {
              size: 'lg',
              variant: 'secondary-dark',
              layout: 'text-only'
            },
            `${classes.button} ${classes.buttonSecondary}`
          )}
          onClick={onConnect}
          variant='contained'>
          Connect wallet
        </Button>
      </Grid>
    </>
  )
}
