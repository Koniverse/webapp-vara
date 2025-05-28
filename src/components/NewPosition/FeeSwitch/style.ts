import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => {
  return {
    wrapper: {
      width: '100%',
    }
  }
})

export const useTabsStyles = makeStyles()(() => {
  return {
    root: {
      overflow: 'visible',
      minHeight: 40,
      position: 'relative',
    },
    indicator: {
      display: 'none'
    },
    flexContainer: {
      justifyContent: 'space-between'
    },
    scrollButtons: {
      position: 'absolute',
      zIndex: 10,
      top: 0,
      bottom: 0,
      left: 0,
      width: 24,
      backgroundColor: koniColors.fadedLight['o-85'],
      color: koniColors.fadedDark['o-65'],

      '&:last-of-type': {
        left: 'auto',
        right: 0,
      },

      '.MuiTouchRipple-root': {
        display: 'none'
      },

      '&:hover': {
        color: koniColors.fadedDark['o-85'],
      }
    }
  }
})

export const useSingleTabStyles = makeStyles()(() => {
  return {
    root: {
      zIndex: 1,
      textTransform: 'none',
      ...koniTypography.heading8,
      height: 40,
      minHeight: 40,
      borderRadius: 8,
      color: koniColors.background['dark-1'],
      backgroundColor: koniColors.fadedDark['o-5'],
      paddingInline: 0,
      minWidth: 80,
      flex: 1,
      width: 80,
      marginRight: 8,
      position: 'relative',
      overflow: 'visible',

      '&:hover': {
        backgroundColor: koniColors.fadedDark['o-10'],
      },

      '&:last-of-type': {
        marginRight: 0
      }
    },
    best: {
      // color: colors.invariant.green,
      // border: `2px solid ${colors.invariant.green}`,
      // borderRadius: 10,
      //
      // '&:hover': {
      //   color: colors.invariant.green
      // }
    },
    selected: {
      backgroundColor: koniColors.palette['violet-4'],

      '&.Mui-selected': {
        color: koniColors.background['dark-1'],
      },

      '&:hover': {
        backgroundColor: koniColors.palette['violet-4'],
      }
    }
  }
})

export default useStyles
