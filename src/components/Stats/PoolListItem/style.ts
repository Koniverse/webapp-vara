import { colors, koniColors, koniTypography, theme, typography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '5% auto 15% 15%  15% 92px',
    whiteSpace: 'nowrap',
    maxWidth: '100%',

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '32.5% 17.5% 35% 15% ',

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

  poolListItemRoot: {
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

    '.__col-no': {
      paddingLeft: 20
    },

    '.__col-action': {
      paddingRight: 16
    },

    [theme.breakpoints.down('sm')]: {}
  },

  symbolsContainer: {
    marginLeft: 10,
    paddingRight: 5,

    '& p': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: 'block'
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      justifyContent: 'flex-start'
    }
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: -4
    }
  },
  activeLiquidityIcon: {
    marginLeft: 5,
    height: 14,
    width: 14,
    border: '1px solid #FFFFFF',
    color: colors.invariant.text,
    borderRadius: '50%',
    fontSize: 10,
    lineHeight: '10px',
    fontWeight: 400,
    textAlign: 'center',
    boxSizing: 'border-box',
    paddingTop: 1,
    cursor: 'pointer'
  },
  liquidityTooltip: {
    background: colors.invariant.component,
    boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.35)',
    borderRadius: 20,
    padding: 16,
    maxWidth: 350,
    boxSizing: 'border-box'
  },
  liquidityTitle: {
    color: colors.invariant.text,
    ...typography.heading4,
    marginBottom: 8
  },
  liquidityDesc: {
    color: colors.invariant.text,
    ...typography.caption1
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  },
  actionButton: {
    cursor: 'pointer'
  },

  imageContainer: {
    display: 'flex',
    alignItems: 'center'
  },

  iconsWrapper: {
    display: 'flex'
  },

  iconContainer: {
    minWidth: 36,
    maxWidth: 36,
    height: 36,
    position: 'relative',

    '& + &': {
      marginLeft: -14,

      '.__token-icon': {
        boxShadow: '-3.6px 0 3.6px 0 rgba(0, 0, 0, 0.3)' as any
      },
    }
  },
  tokenIcon: {
    minWidth: 36,
    maxWidth: 36,
    height: 36,
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
