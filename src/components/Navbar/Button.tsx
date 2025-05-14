import React from 'react'
import useStyles from './style'
import { Button } from '@mui/material'
import classNames from 'classnames'
import { Icon, IconProps } from '@phosphor-icons/react'

export interface IProps {
  name: string
  active?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
  disabled?: boolean
  startIcon?: Icon
  iconWeight?: IconProps['weight']
}
export const NavbarButton: React.FC<IProps> = ({
  name,
  active,
  onClick,
  className,
  disabled = false,
  startIcon: StartIcon,
  iconWeight = 'fill'
}) => {
  const { classes } = useStyles()
  return (
    <Button
      className={classNames(className, classes.button, active ? classes.active : undefined)}
      variant='contained'
      classes={{ disabled: classes.disabled }}
      disabled={disabled}
      type={onClick ? 'button' : 'submit'}
      startIcon={StartIcon ? (
          <StartIcon
            weight={iconWeight}
          />
      ) : undefined}
      onClick={onClick}>
      {name}
    </Button>
  )
}
export default NavbarButton
