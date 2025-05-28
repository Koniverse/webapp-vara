import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'
import { contentContainerMobileStyle, leftContentContainerStyle } from '@styles'

export const useStyles = makeStyles()(theme => {
  return {
    wrapper: {
     ...leftContentContainerStyle,
      padding: '40px 32px',
      flex: '1 1 0%',

      [theme.breakpoints.down('md')]: {
        ...contentContainerMobileStyle,
        padding: '16px 16px 24px'
      }
    },

    sectionTitle: {
      ...koniTypography.heading6,
      color: koniColors.fadedDark['o-100'],
      paddingInline: 8,
      paddingBlock: 4,
      marginBottom: 12,

      [theme.breakpoints.down('md')]: {
        ...koniTypography.heading7,
      }
    },

    sectionWrapper: {
      borderRadius: 16,
      backgroundColor: koniColors.background['light-1'],
      paddingTop: 0,
      width: '100%'
    },

    // token area

    tokenArea: {
      paddingBlock: 16,
      paddingInline: 20,
      marginBottom: 20,

      [theme.breakpoints.down('md')]: {
        padding: 12,
        marginBottom: 12,
      }
    },

    // selects

    selects: {
      gap: 8,
      marginBottom: 16
    },

    selectWrapper: {
      flex: '1 1 0%'
    },

    arrows: {

    },

    inputLabel: {
      ...typography.body3,
      lineHeight: '16px',
      color: colors.invariant.light,
      marginBottom: 3
    },

    customSelect: {
      width: '100%',
      border: 'none',
      height: 44,

      '& .selectArrow': {
        marginLeft: 'auto'
      },

      '&:hover': {

      }
    },

    // depositAmountArea

    depositAmountArea: {
      marginBottom: 24,

      [theme.breakpoints.down('md')]: {
        marginBottom: 16,
      }
    },

    amountInputSeparator: {
      paddingInline: 24,
      paddingTop: 17,
      paddingBottom: 15,
      width: '100%',

      '&:before': {
        content: '""',
        height: 1,
        display: 'block',
        backgroundColor: koniColors.fadedDark['o-10'],
      },

      [theme.breakpoints.down('md')]: {
        paddingTop: 12,
        paddingBottom: 12,
      }
    },

    addButton: {
      width: '100%',
      display: 'flex',
    },

    hoverButton: {
      '&:hover': {

      }
    },

    connectWalletButton: {
      [theme.breakpoints.down('sm')]: {

      }
    }
  }
})
