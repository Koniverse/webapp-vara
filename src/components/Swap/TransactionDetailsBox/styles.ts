import { koniColors, koniTypography, theme } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles<{ open: boolean }>()((_theme, { open }) => ({
  wrapper: {
    borderRadius: 16,
    padding: 0,
    background: koniColors.background['light-1'],
    overflow: 'hidden',
    transition: 'max-height 300ms',
    maxHeight: open ? 152 : 0,
    marginBottom: open ? 12 : 0,
  },
  innerWrapper: {
    padding: '16px 24px',
    minHeight: 132,

    [theme.breakpoints.down('md')]: {
      padding: '8px 12px',
    }
  },
  row: {
    alignItems: 'center',
    minHeight: 21,

    '&:not(:last-child)': {
      marginBottom: 12
    },

    [theme.breakpoints.down('md')]: {
      '&:not(:last-child)': {
        marginBottom: 8
      },
    }
  },
  label: {
    ...koniTypography.heading9,
    color: koniColors.fadedDark['o-65'],
    marginRight: 4
  },
  value: {
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-100'],

    [theme.breakpoints.down('md')]: {
      ...koniTypography.heading9,
    }
  },
  loadingContainer: {
    width: 20,
    justifyContent: 'center',
    overflow: 'hidden'
  },
  loading: {
    width: 15,
    height: 15
  }
}))
