import { Theme } from '@mui/material'
import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'
import { leftContentContainerStyle } from '@styles'

export const useStyles = makeStyles()((theme: Theme) => ({
  wrapper: {
    maxWidth: 1384,
    minHeight: '100%'
  },

  overviewContainer: {
    ...leftContentContainerStyle,
    padding: 32
  },

  subheader: {
    ...koniTypography.heading5,
    color: koniColors.fadedDark['o-100'],
    marginBottom: 24
  },

  plotsRow: {
    marginBottom: 24,
    gap: 24,
    flexDirection: 'row',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },

  row: {
    marginBottom: 40
  },

  loading: {
    width: 150,
    height: 150,
    margin: 'auto'
  },

  plot: {
    flex: 1,

    [theme.breakpoints.down('sm')]: {}
  }
}))

export default useStyles
