import { Theme } from '@mui/material'
import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme: Theme) => {
  return {
    popover: {
      marginTop: 'max(calc(50vh - 350px), 20px)',
      marginLeft: 'calc(50vw - 241px)',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        marginLeft: 'auto',
        justifyContent: 'center'
      }
    },
    paper: {
      background: 'transparent',
      boxShadow: 'none'
    },

    root: {
      padding: 24,
      backgroundColor: koniColors.palette['violet-1'],
      border: `2px solid ${koniColors.fadedLight['o-100']}`,
      borderRadius: 16,
      width: 480,
      maxWidth: '100%',

      [theme.breakpoints.down('sm')]: {}
    },

    // header

    upperRow: {
      flexWrap: 'nowrap',
      marginBottom: 24,
      color: koniColors.fadedDark['o-100'],

      '& p': {
        ...koniTypography.heading6
      }
    },

    close: {
      minWidth: 0,
      maxWidth: 16,
      fontSize: 20,
      padding: 0,
      background: 'none',
      color: koniColors.fadedDark['o-100'],
      '&:hover': {
        background: 'none !important'
      }
    },

    inputArea: {
      backgroundColor: koniColors.background['light-1'],
      borderRadius: 16,
      padding: 12,
      alignItems: 'center',

      '.MuiInput-root': {
        flex: 1
      }
    },

    input: {
      backgroundColor: koniColors.fadedDark['o-5'],
      width: '100%',
      height: 46,
      color: koniColors.fadedDark['o-85'],
      borderRadius: 12,
      paddingInline: 16,
      paddingBlock: 0,
      ...koniTypography.body3,
      marginRight: 8,

      '&::placeholder': {
        color: koniColors.fadedDark['o-65'],
        ...koniTypography.body3
      },
      '&:focus': {
        outline: 'none'
      }
    },
    add: {}
  }
})

export default useStyles
