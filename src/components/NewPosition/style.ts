import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => {
  return {
    // back

    wrapper: {
      width: 1156,
      maxWidth: '100%'
    },

    back: {
      height: 24,
      marginBottom: 18,
      width: 'fit-content',
      transition: 'filter 300ms',

      '&:hover': {
        filter: 'brightness(2)',
        '@media (hover: none)': {
          filter: 'none'
        }
      }
    },
    backIcon: {
      width: 22,
      height: 24,
      marginRight: 12
    },
    backText: {
      color: colors.invariant.lightHover,
      WebkitPaddingBefore: '2px',
      ...typography.body2
    },

    //

    headerContainer: {
      columnGap: 24,
      alignItems: 'flex-end',
    },

    titleContainer: {
      maxWidth: 464,
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

      [theme.breakpoints.down('sm')]: {

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
        marginBottom: 24,
        marginRight: 0
      }
    },
    settingsIconBtn: {
      marginLeft: 8,
      minWidth: 'auto',

      svg: {
        color: koniColors.background['light-1'],
      },

      '&:hover': {

      }
    },

    options: {
      width: 'calc(50% - 12px)',
      marginBottom: 12,
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',

      [theme.breakpoints.down('md')]: {
        width: '100%'
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
