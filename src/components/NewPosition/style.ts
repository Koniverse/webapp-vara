import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => {
  return {
    mainContainer: {
      width: '100%',

      [theme.breakpoints.down('xl')]: {
        paddingInline: 32
      },

      [theme.breakpoints.down('lg')]: {
        paddingInline: 24
      },

      [theme.breakpoints.down('md')]: {
        paddingInline: 16
      }
    },

    wrapper: {
      width: 1156,
      maxWidth: '100%',
      marginLeft: 'auto',
      marginRight: 'auto'
    },

    // back

    backWrapper: {
      maxWidth: '100%',
      width: 1620,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 36,

      [theme.breakpoints.down('xl')]: {
        width: '100%',
      },

      [theme.breakpoints.down('md')]: {
        marginBottom: 24,
      },
    },

    back: {
      width: 'fit-content',
      // transition: 'filter 300ms',
      //
      // '&:hover': {
      //   filter: 'brightness(2)',
      //   '@media (hover: none)': {
      //     filter: 'none'
      //   }
      // }
    },
    backIcon: {
      width: 20,
      height: 20,
      marginRight: 8,
      color: koniColors.fadedLight['o-100']
    },

    backText: {
      color: koniColors.fadedLight['o-100'],
      ...koniTypography.body2
    },

    //

    headerContainer: {
      columnGap: 24,
      alignItems: 'flex-end'
    },

    titleContainer: {
      marginBottom: 12,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexGrow: 1,

      [theme.breakpoints.down('md')]: {
        maxWidth: 'none'
      }
    },

    title: {
      color: koniColors.background['light-1'],
      ...koniTypography.heading6,

      [theme.breakpoints.down('md')]: {
        ...koniTypography.heading7,
      }
    },

    row: {
      minWidth: 464,
      minHeight: 540,
      position: 'relative',
      flexDirection: 'row',

      '& .blurLayer': {
        height: '100%'
      },

      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        minWidth: 0,

        '& .blurInfo': {
          justifyContent: 'flex-start',
          paddingTop: 60
        }
      }
    },
    deposit: {
      marginRight: 24,

      [theme.breakpoints.down('md')]: {
        marginBottom: 16,
        marginRight: 0
      }
    },
    settingsIconBtn: {
      marginLeft: 8,
      minWidth: 'auto',

      svg: {
        color: koniColors.background['light-1']
      },

      '&:hover': {}
    },

    options: {
      width: 'calc(50% - 12px)',
      marginBottom: 12,
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',

      [theme.breakpoints.down('md')]: {
        marginTop: -4,
        width: '100%',
        alignItems: 'center',
      }
    },
    switch: {
      transition: 'opacity 500ms',
      display: 'flex',
      justifyContent: 'flex-end'
    },

    optionsWrapper: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end'
    }
  }
})

export default useStyles
