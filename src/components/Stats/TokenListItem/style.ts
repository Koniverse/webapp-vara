import { Theme } from '@mui/material'
import { koniTypography, koniColors } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '76px 1fr 236px 236px 236px' as any,
    whiteSpace: 'nowrap',

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '30% 22.5% 32.5% 15%',
      '& p': {

      }
    }
  },

  tokenListItemRoot: {
    color: koniColors.fadedDark['o-100'],
    backgroundColor: koniColors.background['light-1'],
    borderRadius: 12,
    padding: '12px 0' as any,

    alignItems: 'center',

    '& + &': {
      marginTop: 8,
    },

    '& p': {
      ...koniTypography.body2
    },

    '.__col': {
      paddingRight: 24
    },

    '.__col-no': {
      paddingLeft: 20
    },

    '.__col-tvl': {
      paddingRight: 16
    },

    [theme.breakpoints.down('sm')]: {
      '& p': {

      }
    }
  },

  headerRoot: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 12,

    '& p': {
      ...koniTypography.body4,
      display: 'flex',
      color: koniColors.fadedDark['o-65'],
      justifyContent: 'start',
      alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      '& p': {
      }
    }
  },

  tokenName: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 5,

    '& p': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
  },

  tokenSymbol: {
    color: koniColors.fadedDark['o-65'],
  },

  icon: {
    width: 16,
    height: 16,
    [theme.breakpoints.down('sm')]: {
      marginLeft: -4
    }
  },
  imageContainer: {
    minWidth: 36,
    maxWidth: 36,
    height: 36,
    marginRight: 8,
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },

  tokenIcon: {
    minWidth: 36,
    maxWidth: 36,
    height: 36,
    marginRight: 8,
    borderRadius: '50%'
  },

  warningIcon: {
    position: 'absolute',
    width: 12,
    height: 12,
    bottom: -6,
    right: -6
  }
}))
