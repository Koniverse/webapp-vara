import { colors, koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'
import { popoverLayoutStyle } from '@styles'

export const useStyles = makeStyles()(() => {
  return {
    paper: {
      background: 'none',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    detailsWrapper: {
      width: 332,
      ...popoverLayoutStyle,

      '& h2': {
        ...koniTypography.heading6,
      }
    },

    headerPart: {
      color: koniColors.fadedDark['o-100'],
      marginBottom: 24,
    },

    inputArea: {
      borderRadius: 16,
      padding: 16,
      backgroundColor: koniColors.background['light-1'],
    },

    label: {
      ...koniTypography.body4,
      color: koniColors.fadedDark['o-85'],
      marginBottom: 12
    },

    selectTokenClose: {
      minWidth: 0,
      background: 'none',
      '&:hover': {
        background: 'none !important'
      },
      cursor: 'pointer',
      '&:after': {
        content: '"\u2715"',
        fontSize: 20,
        position: 'absolute',
        color: koniColors.fadedDark['o-100'],
        top: '40%',
        right: '10%',
        transform: 'translateY(-50%)'
      }
    },
    detailsInfoForm: {
      border: 0,
      outline: 'none',
      color: koniColors.fadedDark['o-85'],
      borderRadius: 8,
      width: '100%',
      backgroundColor: koniColors.background['light-2'],
      ...koniTypography.body3,
      paddingLeft: 16,
      paddingRight: 16,
      height: 46,
      '&::placeholder': {
        color: colors.invariant.light
      },
      '&:focus': {
        outline: 'none'
      }
    },
    activeForm: {

    },
    innerInput: {
      paddingBlock: 0,
      textAlign: 'right'
    },
    detailsInfoBtn: {
      minWidth: 56,
      backgroundColor: koniColors.palette['violet-4'],
      color: koniColors.background['dark-2'],
      borderRadius: 8,
      border: 'none',
      padding: 0,
      width: 49,
      height: 36,
      marginRight: -9,
      cursor: 'pointer',
      marginLeft: 8,
      ...koniTypography.body3,
      '&:hover': {
        backgroundColor: koniColors.background['dark-2'],
        color: koniColors.palette['violet-4'],
      },

      '&:active:not(:disabled)': {
        backgroundColor: koniColors.background['dark-2'],
        color: koniColors.palette['violet-6'],
      }

    },
    info: {
      ...koniTypography.body3,
      color: koniColors.fadedDark['o-65'],
      marginTop: 10
    },
    slippagePercentageButton: {
      ...koniTypography.heading8,
      height: 40,
      borderRadius: 8,
      backgroundColor: koniColors.background['light-2'],
      color: koniColors.fadedDark['o-100'],
      flex: 1,

      '&:hover': {
        backgroundColor: koniColors.palette['violet-4'],
        // backgroundColor: colors.invariant.light,
        // color: colors.invariant.text,
        // '@media (hover: none)': {
        //   backgroundColor: colors.invariant.newDark,
        //   color: colors.invariant.textGrey
        // }
      }
    },
    slippagePercentageButtonActive: {
      backgroundColor: koniColors.palette['violet-4'],
      color: koniColors.fadedDark['o-100']
    },
    inputAdornedEnd: {
      marginRight: 2
    },
    inputAdornedStart: {
      color: colors.invariant.pink
    }
  }
})

export default useStyles
