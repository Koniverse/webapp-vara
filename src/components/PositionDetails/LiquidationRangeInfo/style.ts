import { Theme } from '@mui/material'
import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => ({
  infoTypeSwap: {
    backgroundColor: koniColors.background['light-1'],
    borderRadius: 16,
    padding: 12
  },

  infoType: {
    backgroundColor: koniColors.fadedDark['o-5'],
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    height: 44,
    justifyContent: 'space-between',
    paddingInline: 12,
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('lg')]: {}
  },

  infoTypeLabel: {
    textTransform: 'capitalize',
    color: koniColors.fadedDark['o-85'],
    ...koniTypography.heading9,

    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {}
  },

  infoSwapToken: {
    color: koniColors.fadedDark['o-45'],
    ...koniTypography.body4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flex: 1,
    textAlign: 'right',

    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {}
  },

  infoSwap: {
    marginTop: 12,
    backgroundColor: koniColors.fadedDark['o-5'],
    display: 'flex',
    justifyContent: 'center',
    paddingInline: 12,
    borderRadius: 24,
    height: 48,
    alignItems: 'center'
  },

  infoAmount: {
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-100'],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    [theme.breakpoints.only('md')]: {}
  }
}))

export default useStyles
