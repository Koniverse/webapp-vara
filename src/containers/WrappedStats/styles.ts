import { Theme } from '@mui/material'
import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'
import { contentContainerMobileStyle, leftContentContainerStyle } from '@styles'

export const useStyles = makeStyles()((theme: Theme) => ({
  wrapper: {
    maxWidth: 1384,
    minHeight: '100%',
  },

  overviewContainer: {
    ...leftContentContainerStyle,
    padding: 32,

    [theme.breakpoints.down('md')]: {
      ...contentContainerMobileStyle,
      padding: 16,
      paddingBottom: 20
    }
  },

  subheader: {
    ...koniTypography.heading5,
    color: koniColors.fadedDark['o-100'],
    marginBottom: 24,

    [theme.breakpoints.down('md')]: {
      ...koniTypography.heading7,
      marginBottom: 16
    }
  },

  plotsRow: {
    marginBottom: 24,
    gap: 24,
    flexDirection: 'row',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },

  row: {
    maxWidth: '100%',
    marginBottom: 40,

    [theme.breakpoints.down('md')]: {
      marginBottom: 16
    }
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
