import { createTheme } from '@mui/material/styles'

export const colors = {
  black: {
    full: '#000000',
    background: '#1B1C2A',
    light: '#090B1B',
    kinda: '#1A1A1A',
    greyish: '#081323',
    cinder: '#0E0C12',
    controls: '#44424E',
    header: '#1A1D28',
    card: '#28242E'
  },
  blue: {
    accent: '#072E5A',
    subtle: 'rgba(7,46,90,0.1)',
    deepAccent: 'rgba(7,46,90,0.5)',
    base: '#0B2545',
    light: '#66AFF5',
    neon: '#08F7FE',
    astel: '#48ADF1',
    bastille: '#1E1A23',
    charade: '#272735',
    deep: '#4B5983'
  },
  green: {
    main: '#00F9BB',
    button: '#40BFA0',
    hover: 'rgba(0,249,187,0.15)',
    pastel: '#8AF7E4',
    snackbar: '#4BB724',
    shine: '#AEE57E'
  },
  white: {
    main: '#FFFFFF'
  },
  red: {
    main: '#EB5757',
    error: '#C52727',
    neon: '#FF2079',
    pinkish: '#FE53BB',
    snackbar: '#DE3232'
  },
  yellow: {
    neon: '#F5D300'
  },
  navy: {
    background: '#0C0D2C',
    dark: '#0E0E2A',
    component: '#1D1D49',
    navBar: 'rgba(249, 249, 251, 0.76)',
    navButton: '#3A3A85',
    grey: '#A3A8CE',
    lightGrey: '#DADCF1',
    veryLightGrey: '#FBFBFB',
    button: '#655ED4',
    info: '#6261A3',
    darkGrey: '#292956',
    tooltip: '#5B54CE',
    '5756B3': '#5756B3',
    '807ADC': '#807ADC'
  },
  invariant: {
    warning: '#EFD063',
    pink: '#EF84F5',
    lightPink: '#f29df7',
    violet: '#9C3EBD',
    green: '#2EE09A',
    dark: '#040B22',
    newDark: '#111931',
    component: '#202946',
    componentBcg: '#111931',
    light: '#3A466B',
    lightHover: '#A9B6BF',
    black: '#010514',
    textGrey: '#A9B6BF',
    lightGrey: '#bac7d1',
    text: '#FFFFFF',
    Error: '#FB555F',
    greenLinearGradient: 'linear-gradient(180deg, #2EE09A 0%, #21A47C 100%)',
    greenLinearGradientOpacity:
      'linear-gradient(180deg, rgba(46, 224, 154, 0.8) 0%, rgba(33, 164, 124, 0.8) 100%)',
    pinkLinearGradient: 'linear-gradient(180deg, #EF84F5 0%, #9C3EBD 100%)',
    pinkLinearGradientOpacity:
      'linear-gradient(180deg, rgba(239, 132, 245, 0.8) 0%, rgba(156, 62, 189, 0.8) 100%)',
    yellow: '#EFD063',
    blue: '#43BBFF'
  }
}

export const koniColors = {
  main: {
    primary: '#FFE433',
    'secondary-1': '#6F60F1',
    'secondary-2': '#1DE885',
    'dark-1': '#151823',
    'light-1': '#151823',
  },
  semantic: {
    warning: '#FFE433',
    error: '#FF4A76',
    success: '#95F37E',
    processing: '#FFC123',
    info: '#71CBFF',
    cancel: '#8F97A8',
  },
  fadedDark: {
    'o-100': 'rgba(21, 24, 35, 1)',
    'o-85': 'rgba(21, 24, 35, 0.85)',
    'o-65': 'rgba(21, 24, 35, 0.65)',
    'o-45': 'rgba(21, 24, 35, 0.45)',
    'o-30': 'rgba(21, 24, 35, 0.3)',
    'o-20': 'rgba(21, 24, 35, 0.2)',
    'o-10': 'rgba(21, 24, 35, 0.1)',
    'o-5': 'rgba(21, 24, 35, 0.05)',
  },
  fadedLight: {
    'o-100': 'rgba(255, 255, 255, 1)',
    'o-85': 'rgba(255, 255, 255, 0.85)',
    'o-65': 'rgba(255, 255, 255, 0.65)',
    'o-45': 'rgba(255, 255, 255, 0.45)',
    'o-30': 'rgba(255, 255, 255, 0.3)',
    'o-20': 'rgba(255, 255, 255, 0.2)',
    'o-10': 'rgba(255, 255, 255, 0.1)',
    'o-6': 'rgba(255, 255, 255, 0.06)',
  },
  background: {
    'dark-1': '#151823',
    'dark-2': '#1F2536',
    'dark-3': '#2C3242',
    'dark-4': '#5F7298',
    'light-1': '#FFFFFF',
    'light-2': '#EEF2FB',
    'light-3': '#92949E',
    divider: 'rgba(31, 31, 35, 0.12)'
  },
  palette: {
    'hollandaise-6': '#FFF643',
    'lime-6': '#C4FE37',
    'lightGreen-5': '#95F37E',
    'lightGreen-7': '#59C442',
    'lightGreen-8': '#4B9F3B',
    'green-5': '#79F1B7',
    'green-6': '#1DE885',
    'sky-5': '#71CBFF',
    'blue-4': '#729CFD',
    'violet-1': '#E7E5FD',
    'violet-4': '#9F95F6',
    'violet-5': '#877BF3',
    'violet-6': '#6F60F1',
    'violet-7': '#5D52C9',
    'magenta-4': '#FF8CCB',
    'cherryRed-4': '#FF6E91',
    'orange-6': '#FF7338',
    'cheese-6': '#FFC123',
    'yellow-4': '#FFE433',
  }
}

export const koniTypography = {
  heading1: {
    fontSize: 68,
    lineHeight: '98px',
    fontWeight: 700
  },
  heading2: {
    fontSize: 56,
    lineHeight: '81px',
    fontWeight: 700
  },
  heading3: {
    fontSize: 44,
    lineHeight: '58px',
    fontWeight: 700
  },
  heading4: {
    fontSize: 36,
    lineHeight: '48px',
    fontWeight: 700
  },
  heading5: {
    fontSize: 32,
    lineHeight: '42px',
    fontWeight: 700
  },
  heading6: {
    fontSize: 24,
    lineHeight: '32px',
    fontWeight: 600
  },
  heading7: {
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 600
  },
  heading8: {
    fontSize: 16,
    lineHeight: '21px',
    fontWeight: 600
  },
  heading9: {
    fontSize: 14,
    lineHeight: '18px',
    fontWeight: 600
  },
  heading10: {
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 700
  },
  // body xlg
  body1: {
    fontSize: 20,
    lineHeight: '30px',
    fontWeight: 500
  },
  // body lg
  body2: {
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 500
  },
  // body md
  body3: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 500
  },
  // body sm
  body4: {
    fontSize: 12,
    lineHeight: '19px',
    fontWeight: 500
  },
  // body xs
  body5: {
    fontSize: 10,
    lineHeight: '16px',
    fontWeight: 500
  },
  // caption md
  caption1: {
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 600
  },
  // caption sm
  caption2: {
    fontSize: 11,
    lineHeight: '14px',
    fontWeight: 600
  },
}

export const typography = {
  heading1: {
    fontSize: 32,
    lineHeight: '36px',
    fontWeight: 700
  },
  heading2: {
    fontSize: 28,
    lineHeight: '32px',
    fontWeight: 700
  },
  heading3: {
    fontSize: 24,
    lineHeight: '28px',
    fontWeight: 700
  },
  heading4: {
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 700
  },
  body1: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 700
  },
  body2: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 400
  },
  body3: {
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 400
  },
  caption1: {
    fontSize: 14,
    lineHeight: '17px',
    fontWeight: 700
  },
  caption2: {
    fontSize: 14,
    lineHeight: '17px',
    fontWeight: 400
  },
  caption3: {
    fontSize: 12,
    lineHeight: '15px',
    fontWeight: 700
  },
  caption4: {
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 400
  },
  tiny1: {
    fontSize: 10,
    lineHeight: '13px',
    fontWeight: 700
  },
  tiny2: {
    fontSize: 10,
    lineHeight: '13px',
    fontWeight: 400
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.navy.button,
      contrastText: colors.navy.veryLightGrey
    },
    secondary: {
      main: colors.green.button,
      contrastText: colors.navy.background
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#030313'
    },
    error: {
      main: '#E15757'
    }
  },
  typography: {
    fontFamily: 'Bricolage Grotesque',
    fontWeightRegular: 500,
    h1: typography.heading1,
    h2: typography.heading2,
    h3: typography.heading3,
    h4: typography.heading4,
    body1: typography.body1,
    body2: typography.body2,
    body3: typography.body3,
    caption: typography.caption1
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 0,
          textTransform: 'none'
        },
        startIcon: {
          marginLeft: 0
        }
      },
      defaultProps: {
        disableRipple: true
      }
    }
  }
})
