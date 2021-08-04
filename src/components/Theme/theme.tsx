import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: 14,
  },

  palette: {
    primary: {
      main: "#663399",
      light: "#F1F3F4",
    },
    secondary: {
      main: "#43454D",
      light: "#949494",
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#F1F3F4",
          boxShadow: "none",
        },
      },
    },
    MuiBadge: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "primary",
        size: "small",
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: "#663399",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "none",
        },
      },
    },
  },
});
export default theme;
