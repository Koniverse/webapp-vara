import { Theme } from '@mui/material'
import { colors, koniColors, koniTypography, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {

    }
  },

  container: {
    display: 'grid',
    gridTemplateColumns: 'auto 150px 190px 150px 342px 72px',
    whiteSpace: 'nowrap',
    maxWidth: '100%',

    [theme.breakpoints.down('sm')]: {

      '& p': {}
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
      alignItems: 'center',

      [theme.breakpoints.down('sm')]: {}
    }
  },

  listItemRoot: {
    color: koniColors.fadedDark['o-100'],
    backgroundColor: koniColors.background['light-1'],
    borderRadius: 12,
    padding: '12px 0' as any,
    alignItems: 'center',

    '& + &': {
      marginTop: 8
    },

    '& p': {
      ...koniTypography.body2
    },

    '.__col': {
      paddingRight: 24
    },

    '.__col-action': {
      textAlign: 'right',
      paddingRight: 16
    },

    '.__col-token': {
      paddingLeft: 16
    },

    [theme.breakpoints.down('sm')]: {}
  },

  // action col

  actionButton: {
    cursor: 'pointer'
  },

  // token col

  iconsAndNames: {
    display: 'flex',
    alignItems: 'center',
  },

  icons: {
    marginRight: 16,
    display: 'flex',
    alignItems: 'center',
  },

  tokenIcon: {
    width: 36,
    borderRadius: '100%',
  },

  arrows: {
    marginLeft: 4,
    marginRight: 4,
  },

  names: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },

  // fee col
  fee: {


    [theme.breakpoints.down('md')]: {

    }
  },
  activeFee: {

  },

  // Token ratio col

  liquidity: {
    [theme.breakpoints.down('lg')]: {

    }
  },

  infoText: {

  },

  activeInfoText: {

  },

  // Value col

  value: {
    [theme.breakpoints.down('sm')]: {

    }
  },

  minMax: {
    display: 'flex',

    '.__col-content': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },

    '.__label': {
      color: koniColors.palette['lightGreen-8']
    },

    [theme.breakpoints.down('md')]: {

    }
  },

  mdInfo: {
    width: 'fit-content',
    flexWrap: 'nowrap',

    [theme.breakpoints.down('lg')]: {
      flexWrap: 'nowrap',
      marginTop: 16,
      width: '100%'
    },

    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap'
    }
  },
  mdTop: {
    width: 'fit-content',

    [theme.breakpoints.down('lg')]: {
      width: '100%',
      justifyContent: 'space-between'
    }
  },
  label: {
    marginRight: 2
  },
  tooltip: {
    color: colors.invariant.textGrey,
    ...typography.caption4,
    lineHeight: '24px',
    background: colors.black.full,
    borderRadius: 12,
    fontSize: 14
  }
}))
