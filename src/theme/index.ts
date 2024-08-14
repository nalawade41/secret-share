import { colors, createTheme } from "@mui/material";

const defaultTheme = createTheme();

const theme = createTheme({
  typography: {
    'label': {
      fontSize: defaultTheme.typography.pxToRem(16),
      fontWeight: 700,
      color: colors.grey[700]
    },
    'header': {
      fontSize: defaultTheme.typography.pxToRem(48),
      fontWeight: 700,
      color: colors.blueGrey[500]
    },
    'subtitle': {
      fontSize: defaultTheme.typography.pxToRem(18),
      fontWeight: 600,
      color: colors.blueGrey[700]
    }
  }
});

export default theme;
