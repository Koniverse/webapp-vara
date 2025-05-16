import { makeStyles } from 'tss-react/mui'
import { leftContentContainerStyle } from '@styles'

const useStyles = makeStyles()(() => {
  return {
    container: {
      ...leftContentContainerStyle,
      maxWidth: 526,
      marginTop: 92,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
})

export default useStyles
