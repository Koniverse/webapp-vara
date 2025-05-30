import { Theme } from '@mui/material'
import { colors, koniColors } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme: Theme) => {
  return {
    rootWrapper: {
      [theme.breakpoints.down('md')]: {
        minHeight: 56,
      }
    },

    root: {
      margin: 'auto',
      maxWidth: 1920,
      paddingInline: 150,
      height: 70,
      display: 'flex',
      justifyContent: 'space-between',

      [theme.breakpoints.down('xl')]: {
        paddingInline: 32
      },

      [theme.breakpoints.down('lg')]: {
        paddingInline: 24
      },

      [theme.breakpoints.down('md')]: {
        paddingInline: 16,
        height: 56,
      }
    },

    logoWrapper: {
      backgroundColor: koniColors.fadedLight['o-6'],
      borderRadius: 28,
      paddingLeft: 28,
      paddingRight: 28,
      height: 56,
      display: 'flex',
      alignItems: 'center',
    },

    logo: {
      width: 92,
      height: 32,
      cursor: 'pointer',
    },

    logoShort: {
      minWidth: 40,
      height: 40,
      backgroundSize: '32px 32px',
      backgroundPosition: 'center center',
      marginRight: 8,

      '&:hover': {
        cursor: 'pointer'
      }
    },
    routers: {
      backgroundColor: koniColors.fadedLight['o-6'],
      borderRadius: '100px',
      transition: 'left 300ms',
      width: 'fit-content',
      margin: '0 10px 0 10px'
    },

    changeWalletButton: {
      height: 56,
      borderRadius: 40,
      color: koniColors.fadedDark['o-100'],
      backgroundColor: koniColors.palette['violet-4'],

      '&:hover': {
        backgroundColor: koniColors.palette['violet-5'],
      },

      '&:active': {
        backgroundColor: koniColors.palette['violet-6'],
      },

      [theme.breakpoints.down('md')]: {
        height: 40,
      }
    },

    connectedWalletIcon: {
      minWidth: 21,
      height: 21,
      marginRight: 0,
      color: colors.invariant.green,
      '& >circle': {
        boxShadow: '0px 0px 10px rgba(157, 212, 109, 0.5)'
      }
    },

    notConnectedWalletIcon: {

    },

    buttons: {
      display: 'flex',
      width: 'auto',
      justifyContent: 'flex-end',
      gap: 8,
      flexWrap: 'nowrap',
      alignItems: 'center',
      [theme.breakpoints.up(1600)]: {
        flex: '1 1 0%'
      },

      [theme.breakpoints.up('lg')]: {
        minWidth: 350
      },

      [theme.breakpoints.only('md')]: {
        minWidth: 350
      },

      [theme.breakpoints.down('md')]: {
        marginLeft: 0,
        justifyContent: 'center'
      },

      [theme.breakpoints.down('sm')]: {
        gap: 4
      }
    },
    leftButtons: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: koniColors.fadedLight['o-6'],
      borderRadius: 28,
      width: 'auto',
      padding: 4,

      [theme.breakpoints.down('md')]: {
        padding: 0,
      }
    },
    buttonsLgConnected: {
      [theme.breakpoints.up('lg')]: {
        minWidth: 433
      }
    },
    link: {
      textDecoration: 'none',
      minWidth: 'fit-content'
    },

    rightSide: {

    },

    menuButton: {
      // width: 142,
      // display: 'flex',
      // justifyContent: 'flex-end',
      // borderRadius: 10,
      // paddingInline: 6,
      // paddingBlock: 1,
      // height: 45,
      // transition: 'background 300ms',
      // marginLeft: 8,
      '&:hover': {
        background: 'transparent'
      },
      '&:hover $menu': {
        filter: 'brightness(2)'
      },

      [theme.breakpoints.down('md')]: {
        width: 40
      }
    },
    leftSide: {
      width: 'auto',

      [theme.breakpoints.up(1600)]: {
        flex: '1 1 0%'
      }
    }
  }
})

export default useStyles
