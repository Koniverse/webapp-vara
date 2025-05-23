import { Theme } from '@mui/material'
import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => ({
  amountInputWrapper: {
    flex: 1,
    paddingRight: 12
  },

  amountInput: {
    color: koniColors.fadedDark['o-85'],
    borderRadius: 20,
    textAlign: 'left',
    fontSize: 32,
    width: '100%',
    transition: 'all .4s',
  },
  input: {
    height: 42,
    paddingTop: 0,
    paddingBottom: 0,
    '& ::placeholder': {
      textAlign: 'left'
    }
  },
  maxButton: {
    marginLeft: 8,

    '&:hover': {

    },
    [theme.breakpoints.down('md')]: {

    }
  },
  maxButtonNotActive: {

    '&:hover': {

      cursor: 'default'
    }
  },

  select: {
    width: 'min-content'
  },

  label: {

  },
  balanceContainer: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 1,
  },
  showMaxButton: {
    cursor: 'pointer'
  },
  BalanceTypography: {
    ...koniTypography.body4,
    color: koniColors.fadedDark['o-85'],
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    display: 'flex',
    alignItems: 'center'
  },
  walletBalanace: {
    color: colors.invariant.lightGrey
  },
  exchangeContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 8,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  noData: {
    color: koniColors.semantic['warning'],
    ...koniTypography.body4,
    display: 'flex',
    flexDirection: 'row',
    cursor: 'default',
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
  loading: {
    width: 15,
    height: 15
  },
  loadingBalance: {
    padding: '0 10px 0 20px',
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
  percentages: {
    flexShrink: 0,
    width: 'fit-content',
    justifyContent: 'end',
    height: 17
  },
  percentage: {
    ...typography.tiny1,
    borderRadius: 5,
    paddingInline: 5,
    marginRight: 3,
    height: 16,
    lineHeight: '16px',
    display: 'flex',
    flexShrink: 0,
    marginTop: 1
  },
  percentagePositive: {
    color: colors.invariant.green,
    backgroundColor: `${colors.invariant.green}40`
  },
  percentageNegative: {
    color: colors.invariant.Error,
    backgroundColor: `${colors.invariant.Error}40`
  },
  caption2: {
    ...koniTypography.body4,
    color: koniColors.fadedDark['o-85'],
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',

    '.__symbol': {
      color: koniColors.fadedDark['o-45'],
    }
  },
  bottom: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingInline: 20
  },
  blur: {
    width: 120,
    height: 42,
    borderRadius: 32,
    background: `linear-gradient(90deg, ${koniColors.fadedDark['o-5']} 25%, ${koniColors.fadedDark['o-10']} 50%, ${koniColors.fadedDark['o-5']} 75%)`,
    backgroundSize: '200% 100%',
    animation: 'shimmer 2s infinite'
  }
}))
export default useStyles
