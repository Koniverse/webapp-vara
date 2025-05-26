import { colors, koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useThumbStyles = makeStyles()(() => {
  return {
    outerCircle: {
      width: 24,
      height: 24,
      borderRadius: '100%',
      border: '2px solid',
      borderColor: koniColors.palette['violet-7'],
      backgroundColor: koniColors.background['light-1'],
      boxSizing: 'border-box'
    },
    innerCircle: {
      background: 'linear-gradient(180deg, #FFFFFF 0%, #A2A2A2 100%)',
      width: 16,
      height: 16,
      borderRadius: '100%'
    }
  }
})

export const useSliderStyles = makeStyles<{ valuesLength: number; disabledRange: number }>()(
  (theme, { disabledRange, valuesLength }) => ({
    root: {
      width: '100%',
      paddingBlock: 8,
      height: 8,
      opacity: disabledRange ? 0.4 : 1,
      marginBottom: 24,

      [theme.breakpoints.down('sm')]: {
        // marginInline: '16px'
      }
    },
    thumb: {
      width: 'auto',
      height: 'auto',
      boxShadow: 'none !important'
    },
    rail: {
      background: koniColors.palette['violet-5'],
      height: 8,
      opacity: 1
    },
    track: {
      background: colors.invariant.lightGrey,
      height: 6
    },
    markLabel: {
      color: koniColors.fadedDark['o-85'],
      ...koniTypography.body2,
      top: 24,

      '&[data-index="0"]': {
        transform: 'translateX(-30%)'
      },

      [`&[data-index="${valuesLength - 1}"]`]: {
        transform: 'translateX(-90%)'
      }
    },
    mark: {
      display: 'none',
      //
      // [`&[data-index="${valuesLength - 1}"], &[data-index="0"]`]: {
      //   display: 'block',
      //   width: 14,
      //   height: 14,
      //   borderRadius: '100%',
      //   transform: 'translate(-6px, -6px)'
      // },
      //
      // '&[data-index="0"]': {
      //   background: disabledRange > 0 ? colors.invariant.lightGrey : colors.invariant.green
      // },
      //
      // [`&[data-index="${valuesLength - 1}"]`]: {
      //   background: colors.invariant.green
      // }
    },

    valueLabel: {
      padding: '8px 15px' as any,
      width: 300,
      height: 17,
      position: 'absolute',
      margin: 0,
      top: -4,
      borderRadius: 7,
      boxShadow: '0 4px 6px -2px rgba(16, 24, 40, 0.03)',
      background: koniColors.background['light-1'],
      border: '1px solid',
      borderColor: koniColors.fadedDark['o-5'],
      maxWidth: '100%',

      '& span': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: koniColors.fadedDark['o-85'],
        ...koniTypography.body4,
        minWidth: 28
      },
      '&::before': {
        display: 'none'
      }
    },
    valueLabelLabel: {
      width: 300,
      background: colors.invariant.pink
    },
    valueLabelCircle: {
      width: 120,
      background: colors.invariant.pink
    },
    valueLabelOpen: {
      width: 200,
      background: colors.invariant.pink
    }
  })
)
