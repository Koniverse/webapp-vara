import { makeStyles } from 'tss-react/mui'
import { theme } from '@static/theme'

export const useStyles = makeStyles()(() => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down('md')]: {
      maxHeight: '100vh',
      overflow: 'hidden',
    },
  },
  body: {
    flex: 1,
    paddingBottom: 120,

    [theme.breakpoints.down('md')]: {
      overflow: 'auto',
      paddingBottom: 44,
    },
  }
}))

export default useStyles
