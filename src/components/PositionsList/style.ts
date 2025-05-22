import { Theme } from '@mui/material'
import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'
import { leftContentContainerStyle } from '@styles'

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    ...leftContentContainerStyle,
    maxWidth: 1384,
    marginTop: 92,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 32px',

    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  blockHeader: {
    paddingTop: 32,
    paddingBottom: 24,
    display: 'flex',
  },
  titleWrapper: {

  },
  title: {
    ...koniTypography.heading5,
    color: koniColors.fadedDark['o-100'],
  },
  searchWrapper: {
    display: 'flex',
    columnGap: 16,
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {

    }
  },
  searchBar: {
    borderRadius: 24,
    backgroundColor: koniColors.background['light-1'],
    color: koniColors.fadedDark['o-100'],
    ...koniTypography.body3,
    height: 42,
    paddingLeft: 16,
    paddingRight: 16,

    '.MuiInputAdornment-positionStart': {
      marginRight: 8
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },

  searchIcon: {
    minWidth: 20,
    height: 20,
    color: koniColors.fadedDark['o-100'],
  },

  button: {

    '&:hover': {

    },
    [theme.breakpoints.down('sm')]: {

    }
  },

  listHeader: {

  },

  buttonSelectDisabled: {
    ...typography.body1,
    textTransform: 'none',
    borderRadius: 14,
    height: 40,
    minWidth: 130,
    paddingInline: 0,
    cursor: 'auto',
    background: `${colors.invariant.light} !important`,
    display: 'flex',
    '&:hover': {
      filter: 'brightness(1.15)',
      '@media (hover: none)': {
        filter: 'none'
      }
    },
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1
    }
  },

  noPositionsText: {
    ...typography.heading1,
    textAlign: 'center',
    color: colors.invariant.text
  },
  list: {
    position: 'relative',
    flex: 1
  },
  itemLink: {
    textDecoration: 'none',
    cursor: 'pointer',

    '&:not(:last-child)': {
      display: 'block',
      marginBottom: 20,

      [theme.breakpoints.down('md')]: {
        marginBottom: 16
      }
    }
  },

  loading: {
    width: 150,
    height: 150,
    margin: 'auto'
  },
  placeholder: {
    width: '100%',
    paddingInline: 40,
    paddingBlock: 68,
    borderRadius: 16
  },
  refreshIconBtn: {
    padding: 0,
    margin: 0,
    minWidth: 'auto',

    [theme.breakpoints.down('sm')]: {

    }
  },

  titleMobileContainer: {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center'
  }
}))
