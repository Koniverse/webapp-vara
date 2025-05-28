import { CSSObject } from '@emotion/react'
import { koniColors, koniTypography } from '@static/theme'

export const leftContentContainerStyle: CSSObject  = {
  backgroundColor: koniColors.palette['violet-1'],
  border: `3px solid ${koniColors.fadedDark['o-85']}`,
  borderRadius: 24,
  boxShadow: `-8px 8px 0 0 ${koniColors.palette['violet-4']}`,
}

export const rightContentContainerStyle: CSSObject  = {
  backgroundColor: koniColors.palette['violet-1'],
  border: `3px solid ${koniColors.fadedDark['o-85']}`,
  borderRadius: 24,
  boxShadow: `8px 8px 0 0 ${koniColors.palette['violet-4']}`,
}

export const contentContainerMobileStyle: CSSObject  = {
  backgroundColor: koniColors.palette['violet-1'],
  border: `2px solid ${koniColors.fadedDark['o-85']}`,
  borderRadius: 24,
  boxShadow: `-4px 4px 0 0 ${koniColors.palette['violet-4']}`,
}

export const popoverLayoutStyle: CSSObject  = {
  backgroundColor: koniColors.palette['violet-1'],
  border: `2px solid ${koniColors.fadedLight['o-100']}`,
  paddingTop: 16,
  paddingLeft: 24,
  paddingRight: 24,
  paddingBottom: 32,
  borderRadius: 16,
}

export const generalButtonStyle: CSSObject  = {
  '&.MuiButton-root': {
    textTransform: 'none',
    boxShadow: 'none',

    '&:hover': {
      boxShadow: 'none',
    }
  },

  '.MuiButton-startIcon': {
    marginLeft: 0,

    svg: {
      width: '100%',
      height: '100%',
    }
  },

  '&.-layout-icon-only': {
    borderRadius: '50%',
    padding: 0,

    '.MuiButton-startIcon': {
      marginRight: 0
    },
  },

  '&.-layout-text-only': {
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 16,
  },

  '&.-layout-text-with-icon': {
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 16,

    '.MuiButton-startIcon': {
      height: 20,
      width: 20,
      marginRight: 4
    },
  },

  '&.-size-lg': {
    height: 56,

    '&.-layout-icon-only': {
      width: 56,
      minWidth: 56,

      '.MuiButton-startIcon, .__button-icon': {
        height: 32,
        width: 32,
      },
    },

    '&.-layout-text-only': {
      ...koniTypography.heading7
    },

    '&.-layout-text-with-icon': {
      ...koniTypography.heading8
    },
  },

  '&.-size-md': {
    height: 48,

    '&.-layout-icon-only': {
      width: 48,
      minWidth: 48,

      '.MuiButton-startIcon, .__button-icon': {
        height: 28,
        width: 28,
      },
    },

    '&.-layout-text-only': {
      ...koniTypography.heading8
    },

    '&.-layout-text-with-icon': {
      ...koniTypography.heading8
    },
  },

  '&.-size-sm': {
    height: 40,

    '&.-layout-icon-only': {
      width: 40,
      minWidth: 40,

      '.MuiButton-startIcon, .__button-icon': {
        height: 24,
        width: 24,
      },
    },

    '&.-layout-text-only': {
      ...koniTypography.body3
    },

    '&.-layout-text-with-icon': {
      ...koniTypography.body3
    },
  },

  '&.-size-xs': {
    height: 36,

    '&.-layout-icon-only': {
      width: 36,
      minWidth: 36,

      '.MuiButton-startIcon, .__button-icon': {
        height: 22,
        width: 22,
      },
    },

    '&.-layout-text-only, &.-layout-text-with-icon': {
      paddingLeft: 8,
      paddingRight: 8,
    },
  },

  '&.-size-xxs': {
    height: 32,

    '&.-layout-icon-only': {
      width: 32,
      minWidth: 32,

      '.MuiButton-startIcon, .__button-icon': {
        height: 20,
        width: 20,
      },
    },

    '&.-layout-text-only, &.-layout-text-with-icon': {
      paddingLeft: 8,
      paddingRight: 8,
    },
  },

  '&.-variant-primary': {
    '&, &.Mui-disabled': {
      borderStyle: 'solid',
      borderColor: koniColors.fadedDark['o-85'],
      backgroundColor: koniColors.palette['violet-4'],
      color: koniColors.background['dark-2'],
    },

    '&.-layout-icon-only': {
      borderWidth: 0
    },

    '&.-layout-text-only': {
      borderWidth: 2
    },

    '&.-layout-text-with-icon': {
      borderWidth: 2
    },

    '&.-size-sm, &.-size-xs, &.-size-xxs': {
      '&.-layout-text-only': {
        borderWidth: 1
      },

      '&.-layout-text-with-icon': {
        borderWidth: 1
      },
    },

    '&:hover:not(:disabled):not(.-non-interactive)': {
      borderColor: koniColors.fadedDark['o-85'],
      backgroundColor: koniColors.background['dark-2'],
      color: koniColors.palette['violet-4'],
    },

    '&:active:not(:disabled):not(.-non-interactive)': {
      borderColor: koniColors.fadedDark['o-85'],
      backgroundColor: koniColors.background['dark-2'],
      color: koniColors.palette['violet-6'],
    }
  },

  '&.-variant-secondary-dark': {
    '&, &.Mui-disabled': {
      backgroundColor: koniColors.background['dark-2'],
      color: koniColors.fadedLight['o-100'],
    },

    '&:hover:not(:disabled):not(.-non-interactive)': {
      backgroundColor: koniColors.background['dark-3'],
      color: koniColors.fadedLight['o-100'],
    },

    '&:active:not(:disabled):not(.-non-interactive)': {
      backgroundColor: koniColors.background['dark-1'],
      color: koniColors.fadedLight['o-100'],
    }
  },

  '&.-variant-secondary-light': {
    '&, &.Mui-disabled': {
      borderStyle: 'solid',
      borderColor: koniColors.fadedDark['o-85'],
      backgroundColor: koniColors.background['light-1'],
      color: koniColors.background['dark-2'],
    },

    '&.-layout-icon-only': {
      borderWidth: 0
    },

    '&.-layout-text-only': {
      borderWidth: 2
    },

    '&.-layout-text-with-icon': {
      borderWidth: 2
    },

    '&.-size-sm, &.-size-xs, &.-size-xxs': {
      '&.-layout-text-only': {
        borderWidth: 1
      },

      '&.-layout-text-with-icon': {
        borderWidth: 1
      },
    },

    '&:hover:not(:disabled):not(.-non-interactive)': {
      borderColor: koniColors.fadedDark['o-85'],
      backgroundColor: koniColors.background['dark-2'],
      color: koniColors.fadedLight['o-100'],
    },

    '&:active:not(:disabled):not(.-non-interactive)': {
      borderColor: koniColors.fadedDark['o-85'],
      backgroundColor: koniColors.background['dark-1'],
      color: koniColors.fadedLight['o-100'],
    }
  },

  '&.-variant-ghost': {
    '&, &.Mui-disabled': {
      backgroundColor: 'transparent',
      color: koniColors.background['dark-2'],
    },

    '&.-layout-text-only': {
      borderRadius: 32,
    },

    '&.-layout-text-with-icon': {
      borderRadius: 32,
    },

    '&:hover:not(:disabled):not(.-non-interactive)': {
      backgroundColor: koniColors.fadedDark['o-5'],
      color: koniColors.fadedDark['o-65'],
    },

    '&:active:not(:disabled):not(.-non-interactive)': {
      backgroundColor: koniColors.fadedDark['o-10'],
      color: koniColors.background['dark-2'],
    }
  },

  '&.Mui-disabled.Mui-disabled': {
    opacity: 0.4,
    pointerEvents: 'auto',
    cursor: 'not-allowed',
  },
}
