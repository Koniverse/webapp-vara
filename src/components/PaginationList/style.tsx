import { Theme } from '@mui/material/styles/createTheme'
import { makeStyles } from 'tss-react/mui'
import { koniColors, koniTypography } from '@static/theme'

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      // width: '100%'
    }
  },
  button: {
    fontFamily: 'inherit',
    cursor: 'pointer',
    ...koniTypography.body3,
    backgroundColor: koniColors.background['light-1'],
    color: koniColors.fadedDark['o-65'],
    margin: 0,
    height: 40,
    borderRadius: 0,

    '.MuiTouchRipple-root': {
      display: 'none !important'
    },

    '&.-prev, &.-next': {
      minWidth: 122
    },

    '&.-prev': {
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
    },

    '&.-next': {
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
    },

    '&.-page, &.-ellipsis': {
      minWidth: 40,
      paddingLeft: 8,
      paddingRight: 8,
    },

    '&:hover:not(:disabled):not(.-non-interactive):not(.Mui-selected)': {
      backgroundColor: koniColors.background['light-1'],
      color: koniColors.fadedDark['o-85'],
    },

    '&:active:not(:disabled):not(.-non-interactive):not(.Mui-selected)': {
      backgroundColor: koniColors.fadedDark['o-10'],
      color: koniColors.fadedDark['o-65'],
    },

    '&.-non-interactive': {
      cursor: 'default',
    },

    '&.Mui-selected.Mui-selected': {
      backgroundColor: koniColors.fadedDark['o-10']
    },

    '&.Mui-disabled.Mui-disabled': {
      backgroundColor: koniColors.background['light-1'],
      opacity: 0.4,
      pointerEvents: 'auto',
      cursor: 'not-allowed',
    },
  }
}))
