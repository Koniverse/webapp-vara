import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { rightContentContainerStyle } from '@styles'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => {
  return {
    wrapper: {
      ...rightContentContainerStyle,
      flex: '1 1 0%',
      paddingBlock: 40,
      paddingInline: 32,
      position: 'relative',

      [theme.breakpoints.down('sm')]: {

      }
    },
    headerContainer: {
      marginBottom: 12
    },
    header: {
      ...koniTypography.heading6,
      paddingInline: 8,
      paddingBlock: 4,
      color: koniColors.fadedDark['o-100'],
    },

    topInnerWrapper: {
      minHeight: 300,
      maxWidth: '100%'
    },

    innerWrapper: {
      borderRadius: 8,
      width: '100%',
      position: 'relative',
    },
    plot: {
      width: '100%',
      height: 185
    },
    subheader: {
      ...koniTypography.heading6,
      paddingInline: 16,
      paddingBlock: 4,
      marginBottom: 12,
      color: koniColors.fadedDark['o-100'],
    },
    inputs: {
      flexDirection: 'row',
      gap: 12
    },
    input: {
      flex: '1 1 0%',
      gap: 12,

      [theme.breakpoints.down('md')]: {
        '&:first-of-type': {
          marginRight: 0,
          marginBottom: 8
        }
      }
    },
    button: {
      width: '100%',
      flex: '1 1 0%',
      ...typography.body2,
      color: colors.white.main,
      textTransform: 'none',
      height: 36,
      paddingInline: 8,
      backgroundColor: colors.invariant.light,
      borderRadius: 11,

      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: colors.invariant.light
        }
      },

      [theme.breakpoints.down('md')]: {
        '&:first-of-type': {
          marginRight: 0
        }
      }
    },
    blocker: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 11,
      width: '100%',
      height: '100%',
      backgroundColor: koniColors.fadedLight['o-65'],
      backdropFilter: 'blur(8px)',
      backfaceVisibility: 'hidden',
      borderRadius: 24,
      [theme.breakpoints.down('md')]: {
        // right: 0,
        // zIndex: 11,
        // width: '100%',
        // borderRadius: 9,
        // textAlign: 'center'
      }
    },

    blockedInfo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      ...koniTypography.heading7,
      color: koniColors.fadedDark['o-100'],
      zIndex: 99
    },
    buttons: {
      marginTop: 24,
      width: '100%',
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center'
    },
    sliderWrapper: {
      paddingTop: 56,
      marginBottom: -24,
      paddingInline: 8,
      position: 'relative',

      [theme.breakpoints.down('sm')]: {
        paddingBottom: 24
      }
    },
    warningWrapper: {
      position: 'absolute',
      top: 60,
      left: 30,

      [theme.breakpoints.down('sm')]: {
        top: 61
      }
    },
    unsafeWarning: {
      ...typography.body2,
      color: colors.invariant.Error,

      [theme.breakpoints.down('sm')]: {
        ...typography.caption4
      }
    },
    questionMark: {
      width: 14,
      height: 14,
      marginLeft: 5
    },
    tooltipText: {
      ...typography.caption4,
      fontSize: 13,
      color: colors.white.main
    },
    loader: {
      height: 150,
      width: 150,
      margin: 'auto'
    },
    infoRow: {
      marginBottom: 16
    },
    activeLiquidity: {
      ...koniTypography.body5,
      color: koniColors.fadedDark['o-85'],
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      cursor: 'default',
      gap: 2
    },
    activeLiquidityIcon: {
      display: 'block',
      fontSize: 12,
      height: 12,
    },
    liquidityTooltip: {
      background: colors.invariant.component,
      boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.35)',
      borderRadius: 20,
      padding: 16,
      maxWidth: 376,
      boxSizing: 'border-box',

      [theme.breakpoints.down('sm')]: {
        maxWidth: 360
      }
    },
    liquidityTitle: {
      color: colors.invariant.text,
      ...typography.heading4,
      marginBottom: 12
    },
    liquidityDesc: {
      color: colors.invariant.text,
      ...typography.caption2
    },
    liquidityNote: {
      color: colors.invariant.textGrey,
      ...typography.caption2
    },
    liquidityImg: {
      width: 80,
      minWidth: 80,
      height: 60,
      marginLeft: 16
    },
    currentPrice: {
      ...koniTypography.body3,
      color: koniColors.palette['violet-6'],
      paddingInline: 8
    },
    currentPriceLegend: {
      ...koniTypography.body5,
      color: koniColors.palette['violet-6'],
      textAlign: 'right'
    },
    checkboxLabel: {
      color: koniColors.fadedDark['o-85'],
      ...koniTypography.body3
    },
    activeLiquidityContainer: {
      width: 'auto'
    }
  }
})

export default useStyles
