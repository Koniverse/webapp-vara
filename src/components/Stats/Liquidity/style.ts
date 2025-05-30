import { typography, colors, koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => ({
  container: {
    backgroundColor: koniColors.background['light-1'],
    borderRadius: 16,
    paddingBlock: 24,
    paddingLeft: 24,
    boxSizing: 'border-box'
  },
  liquidityContainer: {
    dispaly: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontWeight: 'normal',
  },

  liquidityHeader: {
    ...koniTypography.body2,
    color: koniColors.fadedDark['o-65']
  },

  volumeLiquidityHeader: {
    ...koniTypography.heading5,
    letterSpacing: '-0.03em',
    color: koniColors.fadedDark['o-100'],
    marginTop: 8
  },

  barContainer: {
    height: 200,
    display: 'flex'
  },

  volumePercentHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  volumeStatusContainer: {
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 'auto'
  },
  volumeStatusColor: {
    minWidth: 'auto',
    padding: '3px 8px' as any,
    borderRadius: 8,
    backgroundColor: koniColors.background['dark-2'],
  },

  volumeStatusHeader: {
    ...koniTypography.body3
  },

  volumeLow: {
    color: koniColors.semantic.error
  },

  volumeUp: {
    color: koniColors.semantic.success
  },

  LineKeys: {
    marginLeft: 10,
    display: 'flex',
    width: '100%'
  },

  keyPTag: {
    width: '100%',
    color: colors.invariant.textGrey,
    ...typography.caption4
  },
  tooltip: {
    background: koniColors.background['dark-2'],
    border: `1px solid ${colors.invariant.lightGrey}`,
    borderRadius: 8,
    width: 100,
    padding: 4
  },
  tooltipDate: {
    ...koniTypography.body4,
    color: koniColors.fadedLight['o-100'],
    textAlign: 'center'
  },
  tooltipValue: {
    ...koniTypography.body3,
    color: koniColors.semantic.success,
    textAlign: 'center'
  }
}))
