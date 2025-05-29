import { Theme } from '@mui/material'
import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'
import { contentContainerMobileStyle, rightContentContainerStyle } from '@styles'

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    ...rightContentContainerStyle,
    width: '100%',
    padding: '40px 32px' as any,
    borderRadius: 24,

    [theme.breakpoints.down('md')]: {
      ...contentContainerMobileStyle,
      padding: 16,
      paddingBottom: 20,
    }
  },
  headerContainer: {
    ...typography.heading4,
    color: '#FFFFFF'
  },

  header: {
    padding: '4px 16px' as any,
    color: koniColors.fadedDark['o-100'],
    ...koniTypography.heading6
  },

  plotWrapper: {
    paddingBottom: 29
  },

  minMaxInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 12,
    paddingBottom: 12,
  },

  currentPriceContainer: {
    backgroundColor: koniColors.background['light-1'],
    borderRadius: 16,
    padding: 12
  },

  currentPriceContainerTopPart: {
    backgroundColor: koniColors.fadedDark['o-5'],
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    height: 46,
    justifyContent: 'space-between',
    paddingInline: 12,
    whiteSpace: 'nowrap',
  },

  currentPriceLabel: {
    textTransform: 'capitalize',
    color: koniColors.fadedDark['o-85'],
    ...koniTypography.heading9,
  },

  currentPriceSwapTokenInfo: {
    color: koniColors.fadedDark['o-45'],
    ...koniTypography.body4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flex: 1,
    textAlign: 'right',
  },

  currentPriceContainerBottomPart: {
    marginTop: 12,
    backgroundColor: koniColors.fadedDark['o-5'],
    display: 'flex',
    justifyContent: 'center',
    paddingInline: 12,
    borderRadius: 24,
    height: 48,
    alignItems: 'center'
  },

  currentPriceAmount: {
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-100'],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  plot: {
    width: '100%',
    height: 255,

    [theme.breakpoints.down('sm')]: {
      height: 253
    }
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
  currentPriceLegend: {
    ...koniTypography.body5,
    color: koniColors.palette['violet-6'],
    textAlign: 'right'
  }
}))

export default useStyles
