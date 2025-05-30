import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'
import { contentContainerMobileStyle, rightContentContainerStyle } from '@styles'

const useStyles = makeStyles()(theme => {
  return {
    wrapper: {
      ...rightContentContainerStyle,
      flex: '1 1 0%',
      paddingBlock: 40,
      paddingInline: 32,

      [theme.breakpoints.down('md')]: {
        ...contentContainerMobileStyle,
        padding: 16,
        paddingBottom: 20
      }
    },
    header: {
      ...koniTypography.heading6,
      paddingInline: 16,
      paddingBlock: 4,
      marginBottom: 12,
      color: koniColors.fadedDark['o-100'],

      [theme.breakpoints.down('md')]: {
        ...koniTypography.heading7,
        paddingInline: 4,
      }
    },

    topInnerWrapper: {
      maxWidth: '100%',
      marginBottom: 20,
    },

    innerWrapper: {
      borderRadius: 8,
      backgroundColor: colors.invariant.component,
      width: '100%',
      position: 'relative',
      gap: 4
    },

    // midPriceInputArea

    midPriceInputArea: {
      backgroundColor: koniColors.background['light-1'],
      borderRadius: 16,
      padding: 12
    },

    midPrice: {
      marginBottom: 8
    },

    priceWrapper: {

    },

    priceLabel: {
      ...koniTypography.body3,
      color: koniColors.fadedDark['o-85'],
    },

    priceValue: {
      ...koniTypography.body3,
      color: koniColors.fadedDark['o-85'],
    },

    bottomInnerWrapper: {
      display: 'flex',
      flexDirection: 'column'
    },

    //

    subheader: {
      ...koniTypography.heading6,
      paddingInline: 16,
      paddingBlock: 4,
      marginBottom: 12,
      color: koniColors.fadedDark['o-100'],

      [theme.breakpoints.down('md')]: {
        ...koniTypography.heading7,
        paddingInline: 4,
      }
    },
    inputs: {
      flexDirection: 'row',
      gap: 12
    },
    input: {
      flex: '1 1 0%',
      gap: 12,

      [theme.breakpoints.down('md')]: {
        // '&:first-of-type': {
        //   marginRight: 0,
        //   marginBottom: 8
        // }
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
    buttons: {
      marginTop: 24,
      width: '100%',
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',

      [theme.breakpoints.down('md')]: {
        '&:first-of-type': {
          marginTop: 16
        }
      }
    },

    infoWrapper: {
      borderRadius: 16,
      padding: `16px 12px`,
      background: koniColors.background['light-1'],
      marginBottom: 12,
      border: `1px solid ${koniColors.semantic.info}`,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    },

    infoIcon: {
      fontSize: 20,
      backgroundColor: koniColors.semantic.info,
      color: koniColors.fadedDark['o-100'],
      borderRadius: '50%',
      width: 32,
      minWidth: 32,
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    info: {
      ...koniTypography.body3,
      color: koniColors.fadedDark['o-65'],
    },

    sliderWrapper: {
      paddingTop: 56,
      marginBottom: -24,
      paddingInline: 8,
      position: 'relative',

      [theme.breakpoints.down('md')]: {
        paddingBottom: 24
      }
    }
  }
})

export default useStyles
