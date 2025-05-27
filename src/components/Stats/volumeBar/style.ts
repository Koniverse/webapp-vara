import { koniColors, koniTypography, theme, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => ({
  container: {
    width: '100%',
    backgroundColor: koniColors.background['light-1'],
    borderRadius: 16,
    padding: 20,
    display: 'flex',
    whiteSpace: 'nowrap',
    justifyContent: 'space-between'
  },

  tokenName: {
    display: 'flex',
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('sm')]: {
      '& p': {
        ...typography.caption2
      }
    },

    [theme.breakpoints.down('xs')]: {
      '& p': {
        ...typography.caption4
      }
    }
  },

  tokenHeader: {
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-65']
  },

  tokenContent: {
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-100'],
    padding: '0 0 0 5px'
  },

  tokenLow: {
    color: koniColors.palette['lightGreen-7']
  },

  tokenUp: {
    color: koniColors.semantic.error
  }
}))
