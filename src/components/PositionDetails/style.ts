import { Theme } from '@mui/material'
import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => ({
  mainContainer: {
    width: '100%',

    [theme.breakpoints.down('xl')]: {
      paddingInline: 32
    },

    [theme.breakpoints.down('lg')]: {
      paddingInline: 24
    },

    [theme.breakpoints.down('md')]: {
      paddingInline: 16
    }
  },

  wrapperContainer: {
    width: 1156,
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  positionDetails: {
    width: 526,
    marginRight: 32,

    [theme.breakpoints.down('lg')]: {
      width: '100%',
      marginRight: 16,
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

  backWrapper: {
    maxWidth: '100%',
    width: 1620,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 36,

    [theme.breakpoints.down('xl')]: {
      width: '100%'
    },

    [theme.breakpoints.down('md')]: {
      marginBottom: 24
    }
  },

  back: {
    width: 'fit-content'
    // height: 40,
    // transition: 'filter 300ms',
    //
    // '&:hover': {
    //   filter: 'brightness(2)',
    //   '@media (hover: none)': {
    //     filter: 'none'
    //   }
    // }
  },
  backIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    color: koniColors.fadedLight['o-100']
  },
  backText: {
    color: koniColors.fadedLight['o-100'],
    ...koniTypography.body2
  },
  button: {},
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
    // marginTop: 56,

    [theme.breakpoints.down('md')]: {
      marginTop: 0
    }
  },
  marketIdWithRefresher: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: 12,
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
