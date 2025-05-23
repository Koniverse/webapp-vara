import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'
import { leftContentContainerStyle } from '@styles'

export const useStyles = makeStyles()(theme => {
  return {
    wrapper: {
     ...leftContentContainerStyle,
      padding: '40px 32px',
      flex: '1 1 0%',

      [theme.breakpoints.down('sm')]: {
        padding: '16px 8px  16px 8px '
      }
    },

    sectionTitle: {
      ...koniTypography.heading6,
      color: koniColors.fadedDark['o-100'],
      paddingInline: 8,
      paddingBlock: 4,
      marginBottom: 12,
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
      marginBottom: 20
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
      marginBottom: 24
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
