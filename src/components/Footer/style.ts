import { makeStyles } from 'tss-react/mui'
import { koniColors, koniTypography, theme } from '@static/theme'

const useStyles = makeStyles()(() => {
  return {
    footer: {
      [theme.breakpoints.down('md')]: {
        minHeight: 64,
      },
    },

    tabsContainer: {
      paddingInline: 16,
      backgroundColor: koniColors.fadedDark['o-100'],
      display: 'flex',
      justifyContent: 'space-between',
      paddingBlock: 8,

      [theme.breakpoints.down('md')]: {
      },
    },

    tabItemWrapper: {
      flex: 1,
      display: 'block',
      userSelect: 'none',
      '-webkit-tap-highlight-color: transparent': 'transparent',

      '&:active': {
        outline: 'none',
        textDecoration: 'none',
        border: 'none'
      }
    },

    tabItem: {
      minWidth: 70,
      paddingInline: 8,
      color: koniColors.fadedLight['o-45'],
      display: 'flex',
      alignItems: 'center',
      height: 48,
      flexDirection: 'column',
      justifyContent: 'center',

      '&.-active': {
        color: koniColors.fadedLight['o-85'],
      }
    },

    tabIcon: {
      display: 'block',
      fontSize: 24,
      marginBottom: 2,

      'svg': {
        display: 'block',
      }
    },

    tabName: {
      ...koniTypography.body5,

    }

    // footer: {
    //   width: '100%',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   padding: '35px 0',
    //   position: 'relative',
    //   zIndex: 50
    // },
    // footerItem: {
    //   margin: '0 10px',
    //   opacity: '.5',
    //   transition: '.2s all',
    //   '&:hover': {
    //     opacity: 1,
    //     transform: 'scale(1.1) rotate(10deg)',
    //     '@media (hover: none)': {
    //       opacity: 0.5,
    //       transform: 'none'
    //     }
    //   }
    // },
    // footerLink: {
    //   width: '100%',
    //   display: 'flex',
    //   alignItems: 'center'
    // },
    // tooltip: {
    //   color: colors.invariant.textGrey,
    //   ...typography.caption4,
    //   lineHeight: '24px',
    //   background: colors.black.full,
    //   borderRadius: 12,
    //   height: 24,
    //   width: 59,
    //   padding: 0,
    //   textAlign: 'center'
    // },
    // icon: {
    //   height: 40,
    //   width: 40
    // }
  }
})

export default useStyles
