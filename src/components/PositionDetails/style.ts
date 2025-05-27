import { Theme } from '@mui/material'
import { typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => ({
  wrapperContainer: {
    width: 1084,
    flexDirection: 'row',
    maxWidth: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  positionDetails: {
    width: 526,
    marginRight: 32,

    [theme.breakpoints.down('lg')]: {
      width: '100%'
    },

    [theme.breakpoints.down('md')]: {
      marginRight: 0
    }
  },
  right: {
    width: 526,
    [theme.breakpoints.down('lg')]: {
      width: '100%'
    }
  },
  back: {
    height: 40,
    width: 'fit-content',
    transition: 'filter 300ms',

    '&:hover': {
      filter: 'brightness(2)',
      '@media (hover: none)': {
        filter: 'none'
      }
    }
  },
  backIcon: {
    width: 22,
    height: 24,
    marginRight: 12
  },
  backText: {
    color: 'rgba(169, 182, 191, 1)',
    WebkitPaddingBefore: '2px',
    ...typography.body2
  },
  button: {

  },
  buttonStartIcon: {
    marginRight: 0
  },
  buttonText: {
    WebkitPaddingBefore: '2px'
  },
  backContainer: {
    marginBottom: 16,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  positionPlotWrapper: {
    width: '100%',
    marginTop: 56,

    [theme.breakpoints.down('md')]: {
      marginTop: 0
    }
  },
  marketIdWithRefresher: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'space-between'
    }
  },
  rightHeaderWrapper: {
    marginBottom: 12,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0
    }
  }
}))
