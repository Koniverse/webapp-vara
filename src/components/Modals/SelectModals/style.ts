import { Theme } from '@mui/material'
import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme: Theme) => {
  return {
    popover: {
      marginTop: 'max(calc(50vh - 350px), 0px)',
      marginLeft: 'calc(50vw - 251px)',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        marginLeft: 'auto',
        justifyContent: 'center'
      }
    },

    container: {
      overflow: 'hidden',
      padding: 24,
      backgroundColor: koniColors.palette['violet-1'],
      border: `2px solid ${koniColors.fadedLight['o-100']}`,
      borderRadius: 16,
      width: 500,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100vw',
        padding: '20px 16px'
      },
      '.MuiFormControlLabel-label': {
        color: colors.invariant.lightGrey,
        transform: 'translateY(1.5px)'
      },
      '& .MuiCheckbox-root': {
        color: colors.invariant.lightGrey
      },
      '& .MuiCheckbox-root.Mui-checked': {
        color: colors.green.button
      }
    },

    // header

    selectTokenHeader: {
      width: '100%',
      paddingBottom: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: koniColors.fadedDark['o-100'],

      '& h1': {
        ...koniTypography.heading6,
      }
    },

    selectTokenClose: {
      minWidth: 0,
      height: 20,
      '&:after': {
        content: '"\u2715"',
        fontSize: 22,
        position: 'absolute',
        color: koniColors.fadedDark['o-100'],
        top: '50%',
        right: '0%',
        transform: 'translateY(-50%)'
      },
      '&:hover': {

      }
    },

    // body

    selectTokenBody: {
      backgroundColor: koniColors.background['light-1'],
      borderRadius: 16,
      padding: 12,
      width: '100%',
    },

    // topRow

    topRow: {
      marginBottom: 12
    },

    // input

    inputControl: {
      width: '100%',
      position: 'relative'
    },

    inputIcon: {
      color: koniColors.fadedDark['o-85'],
      width: 20,
      height: 20,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 8,
      marginTop: 'auto',
      marginBottom: 'auto'
    },

    selectTokenInput: {
      fontFamily: 'inherit',
      ...koniTypography.body3,
      border: 0,
      backgroundColor: koniColors.fadedDark['o-5'],
      height: 40,
      paddingTop: 0,
      paddingBottom: 0,
      borderRadius: 28,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: 36,
      paddingRight: 8,
      width: '100%',

      '&::placeholder': {
        color: koniColors.fadedDark['o-45'],
        ...koniTypography.body3,
      },
      '&:focus': {
        ...koniTypography.body3,
        outline: 'none'
      }
    },

    addIcon: {
      marginLeft: 4,
      cursor: 'pointer'
    },

    // commonTokensList

    commonTokensList: {
      display: 'flex',
      flexFlow: 'row wrap',
      gap: 12,
    },

    commonTokenItem: {
      minWidth: 'auto',
      display: 'flex',
      cursor: 'pointer',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: koniColors.fadedDark['o-5'],
      borderRadius: 8,
      padding: '6px 12px',

      '& p': {
        ...koniTypography.heading9,
        color: koniColors.fadedDark['o-85'],
      },

      '&:hover': {
        backgroundColor: koniColors.fadedDark['o-10'],
      }
    },

    commonTokenIcon: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      marginRight: 8
    },

    // checkbox
    checkboxContainer: {
      '.MuiCheckbox-root': {
        color: koniColors.fadedDark['o-85'],
      },

      '.MuiCheckbox-root.Mui-checked': {
        color: koniColors.palette['lightGreen-8'],
      },

      '.MuiFormControlLabel-label': {
        ...koniTypography.body3,
        color: koniColors.fadedDark['o-85'],
        transform: 'none'
      }
    },

    // tokenList

    tokenList: {
      height: 400,

      '.rc-scrollbars-track': {
        display: 'none',
      },

      '.rc-scrollbars-view': {
        marginRight: '0 !important',
        marginBottom: '0 !important',
      },

      '.rc-scrollbars-view::-webkit-scrollbar': {
        display: 'none'
      }
    },

    // token item

    tokenItem: {
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: 24,
      cursor: 'pointer',

      '& > p': {
        whiteSpace: 'nowrap'
      },
    },

    imageContainer: {
      minWidth: 28,
      maxWidth: 28,
      height: 28,
      marginRight: 8,
      position: 'relative'
    },

    tokenIcon: {
      minWidth: 28,
      maxWidth: 28,
      height: 28,
      marginRight: 8,
      borderRadius: '50%',
    },

    warningIcon: {
      position: 'absolute',
      width: 12,
      height: 12,
      bottom: -6,
      right: -6
    },

    tokenContainer: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 'min-content'
    },

    tokenName: {
      color: koniColors.fadedDark['o-85'],
      ...koniTypography.heading9
    },

    // tokenAddress: {
    //   backgroundColor: colors.invariant.newDark,
    //   borderRadius: 4,
    //   padding: '2px 4px',
    //   width: 'min-content',
    //   height: 'min-content',
    //   '& a': {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     gap: '12px',
    //     textDecoration: 'none',
    //
    //     '&:hover': {
    //       filter: 'brightness(1.2)',
    //       '@media (hover: none)': {
    //         filter: 'none'
    //       }
    //     },
    //     '& p': {
    //       color: colors.invariant.lightGrey,
    //       ...typography.caption4,
    //       letterSpacing: '0.03em'
    //     }
    //   }
    // },

    tokenDescription: {
      marginTop: 2,
      color: koniColors.fadedDark['o-45'],
      ...koniTypography.body5,
      whiteSpace: 'nowrap'
    },

    tokenBalanceStatus: {
      color: koniColors.fadedDark['o-45'],
      maxHeight: 40,
      '& p': {
        ...koniTypography.heading9
      },

      '& p:last-child': {
        color: koniColors.fadedDark['o-85'],
      }
    },

    hideScroll: {
      '& > *:first-of-type': {
        overflow: 'auto !important'
      },
      overflow: 'visible !important'
    },

    scrollbarThumb: {
      backgroundColor: colors.invariant.pink + '!important',
      borderRadius: 10,
      width: 5
    },
    scrollbarTrack: {
      background: '#111931',
      borderRadius: 10,
      height: '98%',
      margin: 5,
      width: 5,
      transform: 'translateX(20px)'
    },
    scrollbarView: {
      padding: 0 + '!important',
      // width: 'calc(100% + 50px)'
    },
    paper: {
      background: 'transparent',
      boxShadow: 'none',
      maxWidth: 500,
      maxHeight: '100vh',
      '&::-webkit-scrollbar': {
        width: 6,
        background: colors.invariant.component
      },
      '&::-webkit-scrollbar-thumb': {
        background: colors.invariant.light,
        borderRadius: 6
      }
    },
    dualIcon: {
      display: 'flex',
      flexDirection: 'row',
      width: 'fit-content'
    },
    secondIcon: {
      marginLeft: -15,
      marginRight: 14
    },
    button: {
      ...typography.body2,
      padding: 0,
      textTransform: 'none',
      boxShadow: 'none',
      borderRadius: 5,
      backgroundColor: colors.invariant.component,
      color: colors.invariant.textGrey,
      height: 26,
      width: '100%',
      textAlign: 'center',
      marginTop: 4,
      '&:hover': {
        backgroundColor: colors.invariant.light,
        boxShadow: 'none',
        color: colors.white.main,
        '@media (hover: none)': {
          backgroundColor: colors.invariant.component,
          color: colors.invariant.textGrey
        }
      },
      '&:hover span': {
        color: colors.white.main
      }
    },
    filterList: {
      borderRadius: 5,
      background: colors.invariant.component,
      minWidth: 100,
      height: 102,
      padding: 4
    },
    filterListText: {
      borderRadius: 5,
      background: colors.invariant.component,
      minWidth: 115,
      height: 102,
      padding: 4
    },
    filterItem: {
      margin: '2px 0',
      borderRadius: 5,
      cursor: 'pointer',
      position: 'relative',
      '&:hover': {
        background: colors.invariant.component
      }
    },
    filterItemText: {
      margin: '2px 0',
      borderRadius: 5,
      cursor: 'pointer',
      position: 'relative',
      '&:hover': {
        background: colors.invariant.light
      }
    },
    filterNameText: {
      position: 'absolute',
      left: 6,
      color: colors.invariant.textGrey,
      ...typography.body2
    },
    filterName: {
      color: colors.invariant.textGrey,
      position: 'absolute',
      left: 28,
      ...typography.body2
    },
    filterIcon: {
      width: 10,
      height: 10,
      position: 'absolute',
      left: 5,
      top: 8
    },
    popoverSort: {
      background: 'transparent',
      boxShadow: 'none',
      minWidth: 102,
      position: 'absolute'
    },

    // noTokenFound

    noTokenFoundContainer: {
      textAlign: 'center',
      paddingTop: 32,
      paddingBottom: 32,
    },

    noTokenFoundIconWrapper: {
      width: 104,
      height: 104,
      borderRadius: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: koniColors.fadedDark['o-100'],
      backgroundColor: koniColors.fadedDark['o-20'],
      marginBottom: 32,

      svg: {
        width: 60,
        height: 60
      }
    },

    noTokenFoundTitle: {
      ...koniTypography.heading6,
      color: koniColors.fadedDark['o-85']
    },

    noTokenFoundDesc: {
      ...koniTypography.body2,
      color: koniColors.fadedDark['o-85'],
      marginTop: 12
    },

    addTokenButton: {
      marginTop: 32
    },
  }
})

export default useStyles
