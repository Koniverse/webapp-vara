import { theme, koniTypography, koniColors } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
  general: {
    ...koniTypography.body4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    borderRadius: 50,
    paddingBottom: 0,
    color: koniColors.fadedDark['o-85'],
    backgroundColor: koniColors.fadedDark['o-10'],
    boxShadow: 'none',
    // width: 26,
    // maxWidth: 26,
    // height: 14,
    // ...typography.tiny2,
    // background: 'rgba(46, 224, 154, 0.8)',
    // borderRadius: 4,
    // marginLeft: 4,
    // marginTop: 1,
    // textTransform: 'none',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: koniColors.fadedDark['o-10'],
      // '@media (hover: none)': {
      //   background: 'rgba(46, 224, 154, 0.8)'
      // }
    },

    [theme.breakpoints.down('md')]: {
      // ...typography.tiny2,
      // width: 26,
      // maxWidth: 26,
      // height: 14,
      // marginTop: 1
    }
  },

  activeButton: {
    // background: `${colors.invariant.green} !important`
  },

  disabled: {
    opacity: 0.4
  }
}))

export default useStyles
