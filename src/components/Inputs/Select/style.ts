import { Theme } from '@mui/material'
import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => {
  return {
    button: {
      backgroundColor: koniColors.fadedDark['o-5'],
      height: 48,
      borderRadius: 32,
      boxShadow: 'none',
      paddingLeft: 16,
      paddingRight: 8,
      paddingBlock: 0,
      color: koniColors.fadedDark['o-85'],

      '.MuiButton-startIcon': {
        marginLeft: -10,
        marginRight: 4
      },

      '.MuiButton-endIcon': {
        marginRight: 0,
        marginLeft: 0,
        width: 32,
        height: 32,

        'svg': {
          width: 16,
          height: 16,
          margin: 'auto'
        },
      },

      '&:hover': {
        backgroundColor: koniColors.fadedDark['o-10'],
        boxShadow: 'none',
      },

      [theme.breakpoints.down('sm')]: {
        minWidth: 'auto'
      }
    },
    tokenName: {
      ...koniTypography.heading8,
      marginRight: 4
    },
    imageContainer: {
      position: 'relative'
    },
    icon: {
      display: 'block',
      width: 32,
      height: 32,
      borderRadius: '100%'
    },
    warningIcon: {
      position: 'absolute',
      width: 12,
      height: 12,
      bottom: -6,
      right: -6
    }
  }
})

export default useStyles
