import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useWrapperStyles = makeStyles()(theme => ({
  wrapper: {
    margin: '0px 0 24px',
    borderRadius: 12,
    padding: '12px 16px',
    backgroundColor: koniColors.background['light-1'],
    border: `1px solid ${koniColors.fadedDark['o-10']}`,

    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'column'
    }
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: koniColors.background['divider'],
    margin: '0 16px'
    // [theme.breakpoints.down('sm')]: {
    //   height: 1,
    //   width: '100%',
    //   margin: '8px 0'
    // }
  }
}))

export const useStyles = makeStyles<{ isToken: boolean }>()((_theme, { isToken }) => ({
  token: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%'
  },
  imageContainer: {
    minWidth: 32,
    maxWidth: 32,
    height: 32,
    marginRight: 8,
    position: 'relative'
  },
  tokenIcon: {
    minWidth: 32,
    maxWidth: 32,
    height: 32,
    marginRight: 8,
    borderRadius: '50%'
  },
  warningIcon: {
    position: 'absolute',
    width: 12,
    height: 12,
    bottom: -6,
    right: -6
  },
  tokenNameWrapper: {
    marginBottom: 2
  },
  tokenName: {
    color: koniColors.fadedDark['o-85'],
    ...koniTypography.heading8,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  tokenAddress: {
    backgroundColor: koniColors.fadedDark['o-10'],
    borderRadius: 51,
    height: 16,
    paddingRight: 4,
    paddingLeft: 4,
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    columnGap: 2,
    cursor: isToken ? 'pointer' : 'default',

    'p': {
      ...koniTypography.body5,
      color: koniColors.fadedDark['o-65'],
      whiteSpace: 'nowrap'
    },

    svg: {
      width: 12,
      height: 12,
      color: koniColors.fadedDark['o-85'],
    }
  },
  tokenDescription: {
    ...koniTypography.body4,
    color: koniColors.fadedDark['o-65'],
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  price: {
    ...koniTypography.heading8,
    color: koniColors.fadedDark['o-85'],
    whiteSpace: 'nowrap',
    marginBottom: 5
  },
  rightItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  link: {
    maxHeight: 8,

    '& img': {
      height: 8,
      width: 8,
      transform: 'translateY(-12px)'
    },
    '&:hover': {
      filter: 'brightness(1.2)',
      '@media (hover: none)': {
        filter: 'none'
      }
    }
  }
}))
