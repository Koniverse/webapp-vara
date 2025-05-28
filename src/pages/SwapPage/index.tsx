import WrappedSwap from '@containers/WrappedSwap/WrappedSwap'
import useStyles from './styles'
import { useParams } from 'react-router-dom'

export const SwapPage: React.FC = () => {
  const { classes } = useStyles()
  const { item1, item2 } = useParams()

  const initialTokenFrom = item1 || ''
  const initialTokenTo = item2 || ''

  return (
    <div className={classes.container}>
      <WrappedSwap
        initialTokenFrom={initialTokenFrom}
        initialTokenTo={initialTokenTo}
        className={classes.wrappedSwap}
      />
    </div>
  )
}

export default SwapPage
