import { koniColors, koniTypography, theme } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => ({
  rateText: {
    color: koniColors.fadedDark['o-85'],
    ...koniTypography.body3,
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',

    [theme.breakpoints.down('md')]: {
      ...koniTypography.body4,
    }
  },
  loadingContainer: {
    width: 20,
    paddingInline: 15,
    justifyContent: 'center',
    overflow: 'hidden'
  },
  loading: {
    width: 15,
    zIndex: 10,
    marginTop: 6
  },
  ableToHover: {
    backgroundColor: koniColors.fadedDark['o-10'],
    borderRadius: 28,
    paddingLeft: 16,
    paddingRight: 16,
    cursor: 'pointer',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',

    '&:hover': {
      // backgroundColor: koniColors.fadedDark['o-10'],
      // '@media (hover: none)': {
      //   borderColor: colors.invariant.light
      // }
    },
    [theme.breakpoints.down('md')]: {
      height: 36,
      paddingLeft: 12,
      paddingRight: 12,
    }
  }
}))

export default useStyles
