import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => ({
  amountInput: {
    background: koniColors.fadedDark['o-5'],
    borderRadius: 12,
    ...koniTypography.heading8,
    width: '100%',
    height: 46,
    paddingInline: 16
  },

  input: {
    color: koniColors.fadedDark['o-100'],

    '&:focus': {}
  }
}))

export default useStyles
