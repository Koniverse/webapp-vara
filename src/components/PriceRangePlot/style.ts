import { Theme } from '@mui/material'
import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    height: '100%',
    maxWidth: '100%',
    position: 'relative',
    '& g > text': {
      stroke: 'none',
      fontSize: '10px !important',
      fill: 'rgba(21, 24, 35, 0.65) !important',
      fontFamily: 'Bricolage Grotesque !important',
      fontWeight: 500,

      [theme.breakpoints.down('md')]: {
        // fontSize: '8px!important'
      }
    }
  },
  zoomIcon: {
    width: 18,
    height: 'auto',
    fill: '#111931',

    [theme.breakpoints.down('md')]: {
      width: 22
    }
  },
  zoomButton: {
    minWidth: 28,
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: 'rgba(46,224,154,0.8)',
    padding: 0,
    '&:not(:last-child)': {
      marginBottom: 8
    },

    '&:hover': {
      backgroundColor: colors.invariant.green,
      boxShadow: `0 0 10px ${colors.invariant.green}`
    },

    [theme.breakpoints.down('md')]: {
      width: 40,
      height: 40
    }
  },
  zoomButtonsWrapper: {
    position: 'absolute',
    top: 0,
    right: 8,
    maxWidth: 21,
    height: 64,
    zIndex: 10,
    flexDirection: 'row',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      maxWidth: 92,
      height: 40
    }
  },
  loadingText: {
    fill: colors.invariant.black,
    ...typography.heading4
  },
  errorWrapper: {
    margin: 'auto'
  },
  errorText: {
    color: koniColors.fadedDark['o-100'],
    ...koniTypography.heading7
  },
  reloadButton: {
    marginTop: 12,
  },
  cover: {
    width: '100%',
    height: '100%',
    backgroundColor: koniColors.fadedLight['o-65'],
    backdropFilter: 'blur(8px)',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    zIndex: 11,
    borderRadius: 16,
  },
  loader: {
    height: 100,
    width: 100,
    margin: 'auto'
  }
}))

export default useStyles
