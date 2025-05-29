import { koniColors, koniTypography, theme } from '@static/theme'
import { makeStyles } from 'tss-react/mui'
import { contentContainerMobileStyle, leftContentContainerStyle } from '@styles'

export const useStyles = makeStyles()(() => ({
  blockHeader: {
    paddingTop: 32,
    paddingBottom: 24,

    [theme.breakpoints.down('md')]: {
      rowGap: 12,
      padding: 0,
      paddingBottom: 12
    }
  },

  blockTitle: {
    ...koniTypography.heading5,
    color: koniColors.fadedDark['o-100'],
    marginBottom: 0,

    [theme.breakpoints.down('md')]: {
      ...koniTypography.heading7
    }
  },

  container: {
    ...leftContentContainerStyle,
    maxWidth: 1384,
    padding: '0 32px 32px',
    borderRadius: 16,

    [theme.breakpoints.down('md')]: {
      ...contentContainerMobileStyle,
      padding: 16,
      paddingBottom: 20
    }
  },

  list: {
    maxWidth: '100%',
    overflowX: 'auto',
  },

  listInner: {
    minWidth: 1200
  },

  pagination: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 24,
  }
}))

export default useStyles
