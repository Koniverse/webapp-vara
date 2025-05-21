import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'
import { leftContentContainerStyle } from '@styles'

export const useStyles = makeStyles()(() => ({
  blockHeader: {
    paddingTop: 32,
    paddingBottom: 24
  },

  blockTitle: {
    ...koniTypography.heading5,
    color: koniColors.fadedDark['o-100'],
    marginBottom: 0
  },

  container: {
    ...leftContentContainerStyle,
    maxWidth: 1384,
    padding: '0 32px',
    borderRadius: 16
  },
  pagination: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 24,
    paddingBottom: 32
  }
}))
