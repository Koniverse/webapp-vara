import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      paddingInline: 94,

      [theme.breakpoints.down('md')]: {
        paddingInline: 16,
      },
    },

    wrappedPositionsList: {
      maxWidth: 1384,
      minHeight: 507,
      marginTop: 92,
      marginLeft: 'auto',
      marginRight: 'auto',

      [theme.breakpoints.down('md')]: {
        paddingInline: 16,
        marginTop: 0
      },
    }
  }
})

export default useStyles
