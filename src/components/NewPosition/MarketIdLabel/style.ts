import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useLabelStyles = makeStyles()(() => {
  return {
    marketId: {
      fontFamily: 'Bricolage Grotesque',
      ...koniTypography.heading8,
      color: `${koniColors.fadedLight['o-65']} !important`,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    },

    marketIdText: {
      flexShrink: 1
    },

    clipboardIcon: {
      width: 18,
      cursor: 'pointer',
      '&:hover': {}
    }
  }
})
