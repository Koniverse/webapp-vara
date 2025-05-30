import { colors, theme, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => {
  return {
    placeholderText: {
      ...typography.heading1,
      textAlign: 'center',
      color: colors.white.main
    },
    loading: {
      width: 150,
      height: 150,
      margin: 'auto'
    },
    fullHeightContainer: {
      height: '100%',
      marginTop: 104,
      width: 1122,
      display: 'flex',
      maxWidth: '100%',
      [theme.breakpoints.down('xl')]: {
        paddingInline: 32
      },

      [theme.breakpoints.down('lg')]: {
        marginTop: 0,
        paddingInline: 24
      },

      [theme.breakpoints.down('md')]: {
        paddingInline: 16
      }
    },
    emptyPlaceholder: {
      paddingTop: 68,
      paddingBottom: 68,
      paddingInline: 32,
      width: '100%',
      borderRadius: 16
    }
  }
})

export default useStyles
