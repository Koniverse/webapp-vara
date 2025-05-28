import { theme } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => {
  return {
    container: {
      display: 'flex',
      backgroundColor: 'transparent',
      // paddingInline: 200,
      marginTop: 40,

      // [theme.breakpoints.down('lg')]: {
      //   paddingInline: 40
      // },
      //
      [theme.breakpoints.down('md')]: {
        marginTop: 16,
      },
      //
      // [theme.breakpoints.down('sm')]: {
      //   paddingInline: 8
      // }
    }
  }
})

export default useStyles
