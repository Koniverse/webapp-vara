import { makeStyles } from 'tss-react/mui'
import { theme } from '@static/theme'

const useStyles = makeStyles()(() => {
  return {
    container: {
      [theme.breakpoints.down('md')]: {
        paddingInline: 16
      },
    },

    wrappedSwap: {
      maxWidth: 526,
      marginTop: 92,
      marginLeft: 'auto',
      marginRight: 'auto',

      [theme.breakpoints.down('md')]: {
        marginTop: 0,
      },
    }
  }
})

export default useStyles
