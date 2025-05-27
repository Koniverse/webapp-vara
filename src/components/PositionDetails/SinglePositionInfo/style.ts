import { Theme } from '@mui/material'
import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'
import { leftContentContainerStyle } from '@styles'

export const useBoxInfoStyles = makeStyles()((theme: Theme) => ({
  boxInfo: {
    position: 'relative',
  },

  title: {
    ...koniTypography.heading6,
    color: koniColors.fadedDark['o-100'],
    paddingInline: 16,
    paddingBlock: 4,
    marginBottom: 12
  },

  violetButton: {
    width: '100%',
    marginTop: 24,

    [theme.breakpoints.down('sm')]: {

    }
  },

  tokenGrid: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: koniColors.background['light-1'],
    borderRadius: 16,
  },

  cover: {
    width: '100%',
    height: '100%',
    backgroundColor: koniColors.fadedLight['o-65'],
    backfaceVisibility: 'hidden',
    backdropFilter: 'blur(8px)',
    position: 'absolute',
    borderRadius: 16,
    zIndex: 1
  },

  loader: {
    height: 50,
    width: 50,
    margin: 'auto'
  },

  tokenArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingInline: 20,
    paddingBlock: 8,
  },

  tokenAreaUpperPart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  tokenValue: {
    overflowX: 'auto',
    overflowY: 'hidden',
    display: 'block',
    whiteSpace: 'nowrap',
    alignSelf: 'center',

    '&::-webkit-scrollbar': {
      display: 'none',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    },
    ...koniTypography.heading5,
    color: koniColors.fadedDark['o-85'],
    marginRight: 8,
    textOverflow: 'ellipsis',
  },

  tokenAreaLowerPart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBlock: 4,
    marginTop: 4
  },

  tokenUSDValueWrapper: {

  },

  token: {
    backgroundColor: koniColors.fadedDark['o-5'],
    padding: 8,
    paddingLeft: 6,
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 'fit-content'
  },

  iconSmall: {
    width: 32,
    height: 32,
    marginRight: 4,
    borderRadius: '100%'
  },

  tokenName: {
    color: koniColors.fadedDark['o-85'],
    ...koniTypography.heading8,
  },

  tokenBalance: {
    color: koniColors.fadedDark['o-85'],
    ...koniTypography.body4,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    flexShrink: 1,
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

  tokenUSDValue: {
    ...koniTypography.body4,
    color: koniColors.fadedDark['o-85'],
    marginRight: 8,

    '.__symbol': {
      color: koniColors.fadedDark['o-45'],
    },
  },

  separator: {
    position: 'relative',
    width: '100%',
    paddingInline: 24,
    paddingBlock: 16,

    '&:before': {
      content: '""',
      height: 1,
      display: 'block',
      backgroundColor: koniColors.fadedDark['o-10'],
    }
  },

  arrowsIcon: {
    width: 50,
    height: 40,
    borderRadius: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 16,
    left: 0,
    right: 0,
    marginTop: -20,
    marginRight: 'auto',
    marginLeft: 'auto',
    cursor: 'pointer',
    color: koniColors.fadedDark['o-100'],
    backgroundColor: koniColors.palette['lime-6'],

    svg: {
      height: 24,
      width: 24,
    },

    '&:hover': {

    }
  },
}));

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  iconsGrid: {
    display: 'flex',
    alignItems: 'center'
  },

  swappableToken: {
    backgroundColor: koniColors.fadedLight['o-6'],
    borderRadius: 32,
    paddingLeft: 6,
    paddingRight: 8,
    display: 'flex',
    alignItems: 'center',
    height: 40,
    gap: 4
  },

  icon: {
    width: 32,
    height: 32,
    borderRadius: '100%',

    [theme.breakpoints.down('sm')]: {
      // width: 22
    }
  },

  name: {
    ...koniTypography.heading8,
    color: koniColors.fadedLight['o-100'],
    textWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
    }
  },

  arrowIcon: {
    marginLeft: 4,
    marginRight: 4,

    '.MuiButton-startIcon svg': {
      color: koniColors.fadedLight['o-100'],
    },

    [theme.breakpoints.down('sm')]: {

    },
    '&:hover': {

    }
  },

  feeText: {
    height: 40,
    borderRadius: 100,
    backgroundColor: koniColors.fadedLight['o-6'],
    color: koniColors.palette['green-6'],
    display: 'flex',
    alignItems: 'center',
    paddingInline: 12,

    [theme.breakpoints.down('md')]: {

    },
    [theme.breakpoints.down('md')]: {

    }
  },

  rangeGrid: {
    display: 'flex',
    flexDirection: 'row'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  headerButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-end',
      flexBasis: 'auto',
      flexGrow: 'auto'
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
      flexBasis: 'auto',
      marginTop: 16
    }
  },

  tooltip: {
    color: colors.invariant.textGrey,
    ...typography.caption4,
    lineHeight: '24px',
    background: colors.black.full,
    borderRadius: 12
  },

  // bottomGrid

  bottomGrid: {
    ...leftContentContainerStyle,
    marginTop: 12,
    padding: '40px 32px' as any,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,

    [theme.breakpoints.down('sm')]: {
      padding: '16px 8px  16px 8px '
    }
  },

  closeButton: {
    [theme.breakpoints.down('sm')]: {

    }
  },
  button: {
    color: colors.invariant.black,
    ...typography.body1,
    textTransform: 'none',
    background: colors.invariant.pinkLinearGradientOpacity,
    borderRadius: 12,
    height: 40,
    width: 130,
    paddingRight: 9,
    paddingLeft: 9,
    letterSpacing: -0.03,

    '&:hover': {
      background: colors.invariant.pinkLinearGradient,
      boxShadow: `0 0 16px ${colors.invariant.pink}`,
      '@media (hover: none)': {
        background: colors.invariant.pinkLinearGradientOpacity,
        boxShadow: 'none'
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      ...typography.caption1
    }
  },
  buttonText: {
    WebkitPaddingBefore: '2px',
    [theme.breakpoints.down('sm')]: {
      WebkitPaddingBefore: 0
    }
  },

  active: {

  },
}))

