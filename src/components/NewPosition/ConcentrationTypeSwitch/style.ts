import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useTabsStyles = makeStyles<{ value: number }>()((_theme) => ({
  root: {
    overflow: 'visible',
    height: 40,
    minHeight: 40,
    borderRadius: 100,
    backgroundColor: koniColors.fadedLight['o-6'],
    padding: 4,
    boxSizing: 'border-box',
  },
  indicator: {
    display: 'none'
  },
  scrollable: {
    overflow: 'hidden'
  },
  flexContainer: {
    justifyContent: 'space-between',
    gap: 8
  }
}))

export const useSingleTabStyles = makeStyles()(() => {
  return {
    root: {
      borderRadius: 28,
      height: 32,
      minHeight: 32,
      paddingInline: 12,
      paddingBlock: 0,
      ...koniTypography.heading9,
      color: koniColors.fadedLight['o-85'],

      '&:hover': {

      }
    },
    selected: {
      '&.Mui-selected': {
        backgroundColor: koniColors.palette['violet-4'],
        color: koniColors.fadedDark['o-100'],
      },

      '&:hover': {

      }
    }
  }
})
