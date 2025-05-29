import { theme } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => ({
  container: {
    display: 'flex',
    minHeight: '70vh',
    marginTop: '65px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingInline: 32,
    maxWidth: '100%',

    [theme.breakpoints.down('lg')]: {
      paddingInline: 36
    },

    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      paddingInline: 16
    },
    //
    // [theme.breakpoints.down('sm')]: {
    //   paddingInline: 8
    // }
  }
}))
