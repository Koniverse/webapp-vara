import { Theme } from '@mui/material'
import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles<{ isSelected: boolean }>()((theme: Theme) => ({
  wrapper: {
    position: 'relative',

    [theme.breakpoints.down('md')]: {
      minWidth: 0
    }
  },

  root: {
    width: '100%',
    paddingInline: 20,
    paddingTop: 16,
    paddingBottom: 12,

    [theme.breakpoints.down('md')]: {
      paddingInline: 12,
      paddingBlock: 8
    }
  },

  // input

  inputContainer: {
    marginBottom: 8,

    [theme.breakpoints.down('md')]: {
      marginBottom: 4,
    }
  },
  input: {
    width: '100%',
    marginRight: 8
  },
  innerInput: {
    padding: 0,
    height: 42,
    ...koniTypography.heading5,
    color: koniColors.fadedDark['o-85'],

    '& ::placeholder': {
      color: koniColors.fadedDark['o-45'],
    },

    [theme.breakpoints.down('md')]: {
      ...koniTypography.heading6,
    }
  },

  // currency

  currency: {
    height: 48,
    minWidth: 92,
    paddingLeft: 8,
    paddingRight: 8,
    width: 'fit-content',
    flexShrink: 0,
    borderRadius: 32,
    backgroundColor: koniColors.fadedDark['o-5'],
    cursor: 'default',
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-85'],

    [theme.breakpoints.down('md')]: {
      height: 40,
      paddingLeft: 6,
      paddingRight: 6,
    }
  },

  imageContainer: {
    width: 32,
    height: 32,
    marginRight: 4,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  currencyIcon: {
    width: 24,
    height: 24,
    borderRadius: '100%'
  },

  warningIcon: {
    position: 'absolute',
    width: 12,
    height: 12,
    bottom: -6,
    right: -6
  },

  currencySymbol: {

  },

  noCurrencyText: {
    flex: 1,
    textAlign: 'center',
  },

  balanceArea: {
    paddingTop: 4,
    paddingBottom: 4,
  },

  percentages: {
    flexShrink: 0,
    width: 'fit-content',
    justifyContent: 'end',
  },

  balance: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 1,
  },

  estimatedBalance: {
    ...koniTypography.body4,
    color: koniColors.fadedDark['o-85'],
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',

    '.__symbol': {
      color: koniColors.fadedDark['o-45'],
    }
  },

  caption2: {
    ...koniTypography.body4,
    color: koniColors.fadedDark['o-85'],
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    display: 'flex',
    alignItems: 'center',
  },

  maxButton: {
    marginLeft: 8,
    ...koniTypography.body4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    borderRadius: 50,
    paddingBottom: 0,
    color: koniColors.fadedDark['o-85'],
    backgroundColor: koniColors.fadedDark['o-10'],
    boxShadow: 'none',

    '&:hover': {
      boxShadow: 'none',
      backgroundColor: koniColors.fadedDark['o-10'],
    },
    [theme.breakpoints.down('md')]: {
      // width: 26,
      // minWidth: 26,
      // height: 14,
      // marginTop: 2
    }
  },
  maxButtonNotActive: {

    '&:hover': {
      cursor: 'default'
    }
  },
  noData: {
    color: koniColors.semantic['warning'],
    ...koniTypography.body4,
    cursor: 'default',
    display: 'flex',
    flexDirection: 'row'
  },
  noDataIcon: {
    marginRight: 5,
    height: 9.5,
    width: 9.5,
    border: `1px solid ${koniColors.semantic['warning']}`,
    color: koniColors.semantic['warning'],
    borderRadius: '50%',
    fontSize: 8,
    lineHeight: '10px',
    fontWeight: 400,
    textAlign: 'center',
    alignSelf: 'center',
    cursor: 'default'
  },
  blocker: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 11,
    width: '100%',
    height: '100%',
    backgroundColor: koniColors.fadedLight['o-65'],
    backfaceVisibility: 'hidden',
    backdropFilter: 'blur(8px)',
  },
  blockedInfoWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 12,
    height: '100%'
  },
  blockedInfo: {
    ...koniTypography.heading7,
    color: koniColors.fadedDark['o-100'],
  },
  loading: {
    width: 15,
    height: 15
  },
  tooltip: {
    color: colors.invariant.textGrey,
    ...typography.caption4,
    lineHeight: '24px',
    background: colors.black.full,
    borderRadius: 12
  },
  loadingBalance: {
    padding: '0 10px 0 20px',
    width: 15,
    height: 15
  }
}))
export default useStyles
