import { koniColors, koniTypography, theme } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => ({
  container: {
    width: '100%',
    backgroundColor: koniColors.background['light-1'],
    borderRadius: 16,
    padding: 20,
    display: 'flex',
    whiteSpace: 'nowrap',
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]: {
      // '& p': {}
      padding: 12,
      flexDirection: 'column',
      rowGap: 8
    }
  },

  tokenName: {
    display: 'flex',
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('md')]: {
      // '& p': {}
      gap: 8
    }
  },

  tokenHeader: {
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-65'],

    [theme.breakpoints.down('md')]: {
      // '& p': {}
      ...koniTypography.heading9,
      flex: 1.5
    }
  },

  tokenContent: {
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-100'],
    padding: '0 0 0 5px',

    [theme.breakpoints.down('md')]: {
      // '& p': {}
      textAlign: 'center',
      ...koniTypography.heading9,
      flex: 1,
      padding: 0,
    }
  },

  tokenPercent: {
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-100'],
    padding: '0 0 0 5px',

    [theme.breakpoints.down('md')]: {
      // '& p': {}
      textAlign: 'right',
      ...koniTypography.heading9,
      flex: 1,
      padding: 0,
    }
  },

  tokenLow: {
    color: koniColors.palette['lightGreen-7']
  },

  tokenUp: {
    color: koniColors.semantic.error
  }
}))
