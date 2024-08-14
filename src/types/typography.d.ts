/* eslint-disable no-unused-vars */
import * as createTypography from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    label: React.CSSProperties;
    header: React.CSSProperties;
    subtitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    label?: React.CSSProperties;
    header?: React.CSSProperties;
    subtitle?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    label: true;
    header: true;
    subtitle: true;
  }
}
