import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles<{ open: boolean }>()((_theme, { open }) => ({
  wrapper: {
    borderRadius: 16,
    padding: 0,
    background: koniColors.background['light-1'],
    overflow: 'hidden',
    transition: 'max-height 300ms',
    maxHeight: open ? 152 : 0,
    marginBottom: open ? 12 : 0
  },
  innerWrapper: {
    padding: '16px 24px',
    minHeight: 132
  },
  row: {
    alignItems: 'center',
    minHeight: 21,

    '&:not(:last-child)': {
      marginBottom: 12
    }
  },
  label: {
    ...koniTypography.heading9,
    color: koniColors.fadedDark['o-65'],
    marginRight: 4
  },
  value: {
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-100']
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
