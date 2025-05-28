import { Theme } from '@mui/material'
import { colors, koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    borderRadius: 16,
    backgroundColor: koniColors.background['light-1'],
    padding: 12
  },

  data: {
    height: 46,
    paddingInline: 12,
    flexWrap: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    backgroundColor: koniColors.fadedDark['o-5'],
    borderRadius: 12,

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: 'auto',
      gap: 0,
      padding: 8
    }
  },
  label: {
    ...koniTypography.heading9,
    color: koniColors.fadedDark['o-85'],
    whiteSpace: 'nowrap',
    marginRight: 8,

    [theme.breakpoints.down('md')]: {

    },
    [theme.breakpoints.down('sm')]: {

    }
  },
  tokens: {
    color: koniColors.fadedDark['o-45'],
    ...koniTypography.heading9,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('md')]: {

    },
    [theme.breakpoints.down('sm')]: {

    }
  },
  controls: {
    backgroundColor: koniColors.fadedDark['o-5'],
    height: 46,
    borderRadius: 23,
    paddingInline: 3,

    input: {
      height: 46,
      paddingInline: 4,
      paddingBlock: 0
    },

    '&.-disabled': {
      borderRadius: 12,
      paddingInline: 0,

      input: {
        paddingInline: 16,
      },
    },

    '& input.Mui-disabled': {
      WebkitTextFillColor: koniColors.fadedDark['o-100'] + '!important'
    }
  },

  value: {
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-100'],
    backgroundColor: 'transparent',
    height: 46,
    paddingInline: 0,
    flex: '1 1 0%',

    '& input': {
      textAlign: 'center'
    },

    '& input:disabled': {

    },

    [theme.breakpoints.down('md')]: {

    },

    [theme.breakpoints.down('sm')]: {

    }
  },

  button: {
    minWidth: 36,
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(46,224,154,0.8)',
    padding: 0,
    zIndex: 1,

    '&:hover': {
      backgroundColor: colors.invariant.green,
      boxShadow: `0 0 10px ${colors.invariant.green}`,
      '@media (hover: none)': {
        background: ' rgba(46, 224, 154, 0.8)',
        boxShadow: 'none'
      }
    }
  },

  buttonIcon: {
    width: 22,
    height: 'auto',
    fill: colors.invariant.dark
  },

  diffWrapper: {
    borderRadius: 12,
    height: 46,
    paddingInline: 12,
    backgroundColor: koniColors.fadedDark['o-5'],

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: 'auto',
      gap: 0,
      padding: 8
    }
  },

  diffLabelWrapper: {
    marginRight: 8,
  },

  diffLabel: {
    ...koniTypography.heading9,
    color: koniColors.fadedDark['o-85'],
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },

  diff: {
    ...koniTypography.heading9,
    marginLeft: 'auto',
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollbarWidth: 'none',

    '&::-webkit-scrollbar': {
      display: 'none',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    },

    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    }
  }
}))

export default useStyles
