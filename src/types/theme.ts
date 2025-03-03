import { Theme as MuiTheme } from '@mui/material/styles';

/**
 * Extended color palette interface for Material-UI theme
 */
declare module '@mui/material/styles' {
  interface PaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }
}

/**
 * Extend Emotion theme to include Material-UI theme
 */
declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}

// Export types for better type checking
export type ExtendedTheme = MuiTheme;
