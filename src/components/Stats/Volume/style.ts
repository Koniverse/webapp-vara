import { colors, koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => ({
  container: {
    backgroundColor: koniColors.background['light-1'],
    borderRadius: 16,
    padding: 24,
    boxSizing: 'border-box',

    '& g > text': {
      stroke: 'none',
      fontSize: '10px !important',
      fill: 'rgba(21, 24, 35, 0.65) !important',
      fontFamily: 'Bricolage Grotesque !important',
      fontWeight: 500,
    }
  },
  volumeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontWeight: 'normal'
  },
  volumeHeader: {
   ...koniTypography.body2,
    color: koniColors.fadedDark['o-65']
  },
  volumePercentContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  volumePercentHeader: {
    ...koniTypography.heading5,
    letterSpacing: '-0.03em',
    color: koniColors.fadedDark['o-100'],
    marginTop: 8
  },
  volumeStatusContainer: {
    marginLeft: 12,
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

  barContainer: {
    height: 200,
    display: 'flex'
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
    color: koniColors.palette['violet-4'],
    textAlign: 'center'
  }
}))
