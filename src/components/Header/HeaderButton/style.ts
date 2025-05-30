import { Theme } from '@mui/material'
import { koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme: Theme) => {
  return {
    headerButton: {
      ...koniTypography.heading8,
      color: koniColors.fadedLight['o-85'],
      backgroundColor: 'transparent',
      height: 48,
      paddingInline: 12,

      // background: 'transparent',
      // color: colors.white.main,
      // paddingInline: 12,
      // borderRadius: 14,
      // textTransform: 'none',
      // ...typography.body1,
      // lineHeight: '22px',
      // height: 32,

      boxShadow: 'none',

      '&:hover': {
        backgroundColor: 'transparent',
        color: koniColors.fadedLight['o-100'],
        // background: colors.invariant.light,
        // '@media (hover: none)': {
        //   background: 'transparent'
        // }
      },
      '&:active': {
        '& #downIcon': {
          transform: 'rotateX(180deg)'
        }
      },
      [theme.breakpoints.down('md')]: {
        height: 40,
      }
    },
    label: {},
    headerButtonConnect: {
      // background: colors.invariant.pinkLinearGradientOpacity,
      // color: colors.invariant.newDark,
      // paddingInline: 12,
      // borderRadius: 14,
      // textTransform: 'none',
      // ...typography.body1,
      // height: 40,
      // minWidth: 130,
      //
      // [theme.breakpoints.down('xs')]: {
      //   minWidth: 100,
      //   width: 130
      // },
      //
      // '&:hover': {
      //   boxShadow: `0 0 15px ${colors.invariant.light}`,
      //   backgroundColor: colors.invariant.light,
      //   '@media (hover: none)': {
      //     background: colors.invariant.pinkLinearGradientOpacity,
      //     boxShadow: 'none'
      //   }
      // }
    },
    headerButtonConnected: {
      // background: colors.invariant.light,
      // color: colors.white.main,
      // paddingInline: 12,
      // borderRadius: 14,
      // textTransform: 'none',
      // ...typography.body1,
      // height: 40,
      //
      // '&:hover': {
      //   background: colors.blue.deep,
      //   '@media (hover: none)': {
      //     background: colors.invariant.light
      //   }
      // }
    },
    headerButtonTextEllipsis: {
      textTransform: 'none',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...typography.body1,
      whiteSpace: 'nowrap'
    },
    disabled: {},
    paper: {
      background: 'transparent',
      boxShadow: 'none'
    },
    startIcon: {},
    endIcon: {},
    innerEndIcon: {
      marginLeft: 0,
      marginBottom: 3
    },
    warningIcon: {
      height: 16,
      marginRight: 4
    }
  }
})

export default useStyles
