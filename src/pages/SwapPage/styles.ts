import { makeStyles } from 'tss-react/mui'
import { leftContentContainerStyle } from '@styles'

const useStyles = makeStyles()(() => {
  return {
    container: {
      ...leftContentContainerStyle,
      maxWidth: 526,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
})

export default useStyles
