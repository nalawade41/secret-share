import { createTheme, alpha } from "@mui/material";
import type { ExtendedTheme } from '../types/theme';

// Modern color palette
const colors = {
  primary: {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',  // main
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  },
  secondary: {
    50: '#F5F5F5',
    100: '#EAEAEA',
    200: '#D6D6D6',
    300: '#B8B8B8',
    400: '#999999',
    500: '#7A7A7A',  // main
    600: '#666666',
    700: '#525252',
    800: '#3D3D3D',
    900: '#292929',
  },
  success: {
    50: '#E9FBF0',
    100: '#C6F6D9',
    200: '#9AEFBC',
    300: '#6AE79C',
    400: '#3EE07F',
    500: '#21CC66',  // main
    600: '#1DB45A',
    700: '#1AA251',
    800: '#178D46',
    900: '#0F5C2E',
  },
};

const defaultTheme = createTheme();

const gradients = {
    primary: {
        main: 'linear-gradient(135deg, #0072FF 0%, #00C6FF 100%)',
        hover: 'linear-gradient(135deg, #0065E6 0%, #00B3FF 100%)',
        active: 'linear-gradient(135deg, #005ACC 0%, #00A3FF 100%)',
    },
    success: {
        main: 'linear-gradient(135deg, #1DB954 0%, #34D574 100%)',
        hover: 'linear-gradient(135deg, #1AA54C 0%, #2FC46A 100%)',
        active: 'linear-gradient(135deg, #169144 0%, #2AB35F 100%)',
    },
};

declare module '@mui/material/styles' {
    interface Theme {
        gradients: typeof gradients;
    }
    interface ThemeOptions {
        gradients?: typeof gradients;
    }
}

const theme = createTheme({
    gradients,
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary[500],
      light: colors.primary[300],
      dark: colors.primary[700],
      ...colors.primary,
    },
    secondary: {
      main: colors.secondary[500],
      light: colors.secondary[300],
      dark: colors.secondary[700],
      ...colors.secondary,
    },
    success: {
      main: colors.success[500],
      light: colors.success[300],
      dark: colors.success[700],
      ...colors.success,
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: colors.secondary[900],
      secondary: colors.secondary[700],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          padding: '12px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: `0 6px 20px ${alpha(colors.primary[500], 0.15)}`,
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          background: gradients.primary.main,
          boxShadow: `0 4px 12px ${alpha(colors.primary[500], 0.2)}`,
          '&:hover': {
            background: gradients.primary.hover,
            boxShadow: `0 6px 16px ${alpha(colors.primary[500], 0.3)}`,
          },
          '&:active': {
            background: gradients.primary.active,
          },
        },
        containedSuccess: {
          background: gradients.success.main,
          '&:hover': {
            background: gradients.success.hover,
          },
          '&:active': {
            background: gradients.success.active,
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
          borderLeft: 'none',
          boxShadow: `0 0 50px ${alpha(colors.secondary[900], 0.08)}`,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            backgroundColor: alpha(colors.secondary[100], 0.3),
            transition: 'all 150ms ease',
            '&:hover': {
              backgroundColor: alpha(colors.secondary[100], 0.5),
            },
            '&.Mui-focused': {
              backgroundColor: '#FFFFFF',
              boxShadow: `0 0 0 4px ${alpha(colors.primary[100], 0.5)}`,
            },
            '& fieldset': {
              border: 'none',
            },
          },
          '& .MuiInputLabel-root': {
            transition: 'all 0.2s ease-in-out',
            fontWeight: 500,
            '&.Mui-focused': {
              color: colors.primary[600],
              fontWeight: 600,
            },
          },
          '& .MuiInputBase-input': {
            fontSize: '1rem',
            lineHeight: 1.6,
            '&::placeholder': {
              color: alpha(colors.secondary[500], 0.5),
              opacity: 1,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: alpha(colors.primary[50], 0.8),
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s ease-in-out',
          border: `1px solid ${alpha(colors.primary[200], 0.2)}`,
          '&:hover': {
            backgroundColor: alpha(colors.primary[50], 0.95),
            border: `1px solid ${alpha(colors.primary[300], 0.3)}`,
            transform: 'translateY(-1px)',
            boxShadow: `0 4px 12px ${alpha(colors.primary[500], 0.08)}`,
          },
          '&.Mui-focused': {
            backgroundColor: '#fff',
            border: `1px solid ${alpha(colors.primary[500], 0.5)}`,
            boxShadow: `0 0 0 3px ${alpha(colors.primary[500], 0.15)}`,
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          transition: 'all 0.15s ease-in-out',
          borderRadius: 8,
          margin: '2px 6px',
          padding: '8px 12px',
          '&:hover': {
            backgroundColor: alpha(colors.primary[50], 0.8),
          },
          '&.Mui-selected': {
            backgroundColor: alpha(colors.primary[100], 0.35),
            '&:hover': {
              backgroundColor: alpha(colors.primary[100], 0.5),
            },
          },
        },
      },
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", sans-serif',
    'label': {
      fontSize: defaultTheme.typography.pxToRem(15),
      fontWeight: 500,
      color: colors.secondary[700],
      letterSpacing: '0.01em',
    },
    'header': {
      fontSize: defaultTheme.typography.pxToRem(36),
      fontWeight: 800,
      color: colors.secondary[900],
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    'subtitle': {
      fontSize: defaultTheme.typography.pxToRem(16),
      fontWeight: 500,
      color: colors.secondary[600],
      letterSpacing: '0.01em',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
