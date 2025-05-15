import { Theme } from '@mui/material'
import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => ({
  swapWrapper: {
    padding: '40px 32px' as any,

    // [theme.breakpoints.down('sm')]: {
    //   padding: '0 8px'
    // }
  },
  header: {
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    paddingBottom: 24,
    paddingLeft: 8,
    paddingRight: 8,
    rowGap: 8,

    '& h1': {
      ...koniTypography.heading4,
      color: koniColors.fadedDark['o-100']
    }
  },
  HiddenTransactionButton: {
    background: 'none !important',
    border: 'none',
    minWidth: 'auto',
    color: colors.invariant.lightHover,
    padding: 0,
    '&:hover': {
      filter: 'brightness(1.15)',
      cursor: 'pointer',
      '@media (hover: none)': {
        filter: 'none'
      }
    },
    '@media (max-width: 400px)': {
      width: '100%'
    }
  },

  transactionDetailDisabled: {
    background: 'none !important',
    border: 'none',
    minWidth: 'auto',
    padding: 0,
    color: colors.invariant.lightHover,
    '@media (max-width: 400px)': {
      width: '100%'
    }
  },

  swapControls: {
    display: 'flex',
    gap: 8
  },

  refreshIconBtn: {

  },
  settingsIconBtn: {

  },
  slippage: {
    position: 'absolute'
  },
  root: {

  },

  inputArea: {
    paddingTop: 16,
    backgroundColor: koniColors.background['light-1'],
    borderRadius: 16
  },

  connectWalletButton: {
    width: '100%',
  },
  tokenComponentTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',

    '&:before': {
      content: '""',
      position: 'absolute',
      left: 24,
      right: 24,
      display: 'block',
      height: 1,
      top: 0,
      bottom: 0,
      margin: 'auto',
      backgroundColor: koniColors.background.divider,
    }
  },
  amountInput: {
    position: 'relative'
  },
  amountInputDown: {
    animation: 'slide-down 300ms linear',

    [theme.breakpoints.down('sm')]: {
      animation: 'slide-down-xs 300ms linear'
    }
  },

  amountInputUp: {
    animation: 'slide-up 300ms linear'
  },

  swapArrowBox: {
    position: 'relative',
    height: 40,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: koniColors.palette['lime-6'],
    borderRadius: 32,
    cursor: 'pointer',
  },

  swapArrows: {
    fontSize: 24,
    color: koniColors.fadedDark['o-100'],
    transition: '.4s all',

    svg: {
      display: 'block',
    }
  },

  transactionDetails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexFlow: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    marginBottom: 12,
    cursor: 'default',
    filter: 'brightness(0.9)',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      gap: 4
    }
  },
  transactionDetailsInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  transactionDetailsButton: {
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1
    }
  },
  transactionDetailsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.invariant.light,
    paddingInline: 15,
    borderRadius: '10px',
    alignItems: 'center',
    height: 34
  },

  transactionDetailsHeader: {
    ...typography.caption2,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    color: colors.invariant.lightGrey
  },

  exchangeRateWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },

    '& svg ': {
      height: 32 + '!important',
      width: 20,
      minWidth: '100%'
    }
  },
  swapButton: {
    width: '100%'
  },

  exchangeRoot: {
    position: 'relative',
    background: colors.invariant.newDark,
    borderRadius: 20
  },
  transactionTop: {
    marginTop: 10
  },

  hideBalance: {
    padding: '5px 15px 5px 15px'
  },

  transactionBottom: {},

  transtactionData: {
    border: `1px solid ${colors.invariant.light}`,
    borderRadius: '10px',
    padding: '5px 15px 5px 15px',
    color: colors.invariant.lightGrey
  },
  ButtonSwapActive: {
    // transition: 'filter 0.3s linear',
    // background: `${colors.invariant.greenLinearGradient} !important`,
    // filter: 'brightness(0.8)',
    // '&:hover': {
    //   filter: 'brightness(1.15)',
    //   boxShadow:
    //     '0px 3px 1px -2px rgba(43, 193, 144, 0.2),0px 1px 2px 0px rgba(45, 168, 128, 0.14),0px 0px 5px 7px rgba(59, 183, 142, 0.12)'
    // }
  },
  infoIcon: {
    display: 'inline-block',
    width: 10,
    height: 10,
    marginLeft: 4,

    filter: 'brightness(0.8)',
    pointerEvents: 'none'
  },
  exchangeRateContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap'
  },
  slippageButton: {

  },
  slippageAmount: {
    color: koniColors.palette['lightGreen-7']
  },
  swapLabel: {
    ...koniTypography.body2,
    color: koniColors.fadedDark['o-45'],
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 6,
    paddingBottom: 6,
    marginBottom: 8
  },
  unknownWarningContainer: {
    marginTop: 12,
    display: 'flex',
    gap: 12
  },
  unknownWarning: {
    width: 'fit-content',
    background: colors.invariant.yellow,
    color: colors.invariant.black,
    padding: 4,
    paddingInline: 8,
    borderRadius: 8,
    fontSize: 12
  }
}))

export default useStyles
