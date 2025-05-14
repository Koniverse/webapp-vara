import { koniColors, koniTypography } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => {
  return {
    button: {
      minWidth: 67,
      backgroundColor: 'transparent',
      color: koniColors.fadedLight['o-85'],
      height: 48,
      borderRadius: 28,
      ...koniTypography.heading8,
      textTransform: 'capitalize',
      boxShadow: 'none',
      margin: '4px',
      paddingLeft: 20,
      paddingRight: 20,

      '& .MuiButton-startIcon': {
        marginLeft: 0,
        marginRight: 12,

        svg: {
          fontSize: 24
        }
      },

      '&:hover': {
        backgroundColor: 'transparent',
        color: koniColors.fadedLight['o-100']
      }
    },
    active: {
      background: koniColors.palette['violet-4'],
      color: koniColors.fadedDark['o-100'],
      ...koniTypography.heading8,
      '&:hover': {
        background: koniColors.palette['violet-4'],
        color: koniColors.fadedDark['o-100'],
      }
    },
    disabled: {
      opacity: 0.4
    },
    icon: {

    }
  }
})

export default useStyles
