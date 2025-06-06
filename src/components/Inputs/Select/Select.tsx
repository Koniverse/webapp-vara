import React, { useEffect } from 'react'
import icons from '@static/icons'
import classNames from 'classnames'
import useStyles from './style'
import { blurContent, unblurContent } from '@utils/uiUtils'
import { Box, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SelectTokenModal from '@components/Modals/SelectModals/SelectTokenModal/SelectTokenModal'
import { SwapToken } from '@store/selectors/wallet'
import { HexString } from '@gear-js/api'

export interface ISelectModal {
  name?: string
  current: SwapToken | null
  centered?: boolean
  tokens: Record<string, SwapToken>
  onSelect: (address: HexString) => void
  className?: string
  hideBalancesInModal?: boolean
  handleAddToken: (address: HexString) => void
  sliceName?: boolean
  commonTokens: HexString[]
  initialHideUnknownTokensValue: boolean
  onHideUnknownTokensChange: (val: boolean) => void
  hiddenUnknownTokens: boolean
}

export const Select: React.FC<ISelectModal> = ({
  name = 'Select',
  current,
  centered,
  tokens,
  onSelect,
  className,
  hideBalancesInModal = false,
  handleAddToken,
  sliceName = false,
  commonTokens,
  initialHideUnknownTokensValue,
  onHideUnknownTokensChange,
  hiddenUnknownTokens
}) => {
  const { classes } = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = React.useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    blurContent()
    setOpen(true)
  }

  const handleClose = () => {
    unblurContent()
    setOpen(false)
  }

  useEffect(() => {
    return () => {
      unblurContent()
    }
  }, [])

  const displayName = !current ? name : current.symbol

  return (
    <>
      <Button
        className={classNames(classes.button, className)}
        color='primary'
        variant='contained'
        onClick={handleClick}
        startIcon={
          !current ? null : (
            <Box className={classes.imageContainer}>
              <img
                className={classes.icon}
                src={current.logoURI ?? icons.SNY}
                alt={current.name + 'logo'}
                width='20'
                height='20'
              />
              {current.isUnknown && <img className={classes.warningIcon} src={icons.warningIcon} />}
            </Box>
          )
        }
        endIcon={<ExpandMoreIcon />}
        classes={{
          endIcon: 'selectArrow'
        }}
        disableRipple>
        <span style={{ whiteSpace: 'nowrap' }} className={classes.tokenName}>
          {sliceName && displayName.length > 10 ? displayName.slice(0, 8) + '...' : displayName}
        </span>
      </Button>
      <SelectTokenModal
        tokens={tokens}
        open={open}
        centered={centered}
        anchorEl={anchorEl}
        onSelect={onSelect}
        handleClose={handleClose}
        hideBalances={hideBalancesInModal}
        handleAddToken={handleAddToken}
        commonTokens={commonTokens}
        initialHideUnknownTokensValue={initialHideUnknownTokensValue}
        onHideUnknownTokensChange={onHideUnknownTokensChange}
        hiddenUnknownTokens={hiddenUnknownTokens}
      />
    </>
  )
}

export default Select
