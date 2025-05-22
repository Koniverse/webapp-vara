import { Button, Grid, Typography } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import { useStyles } from './style'
import { Plugs } from '@phosphor-icons/react'
import { getButtonClasses } from '@utils/uiUtils.ts'

export interface IEmptyPlaceholder {
  title?: string
  desc?: string
  icon?: React.ReactNode
  onAction?: () => void
  className?: string
  style?: React.CSSProperties
  withButton?: boolean
  buttonName?: string
}

export const EmptyPlaceholder: React.FC<IEmptyPlaceholder> = ({
  desc,
  onAction,
  icon,
  className = '',
  title = 'It\'s empty here...',
  withButton = true,
  buttonName
}) => {
  const { classes } = useStyles();
  const _icon = icon || <Plugs weight={'fill'} />;

  return (
    <>
      <Grid className={classNames(classes.container, className)}>
        <div className={classes.iconWrapper}>{_icon}</div>

        <Typography className={classes.title}>{title}</Typography>

        {desc?.length && <Typography className={classes.desc}>{desc}</Typography>}

        {withButton && (
          <Button
            className={getButtonClasses({
              size: 'lg',
              variant: 'primary',
              layout: 'text-only'
            }, classes.button)}
            onClick={onAction}>
            {buttonName ? buttonName : 'Add a position'}
          </Button>
        )}
      </Grid>
    </>
  )
}
