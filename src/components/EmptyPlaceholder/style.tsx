import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => ({
  container: {
    textAlign: 'center',
    backgroundColor: koniColors.background['light-1']
  },

  iconWrapper: {
    width: 104,
    height: 104,
    borderRadius: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: koniColors.fadedDark['o-100'],
    backgroundColor: koniColors.fadedDark['o-20'],
    marginBottom: 32,

    svg: {
      width: 60,
      height: 60
    }
  },

  title: {
    ...koniTypography.heading6,
    color: koniColors.fadedDark['o-85']
  },

  desc: {
    ...koniTypography.body2,
    color: koniColors.fadedDark['o-85'],
    marginTop: 12
  },

  button: {
    marginTop: 32
  }
}))
