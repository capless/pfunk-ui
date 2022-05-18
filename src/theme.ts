import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  typography: {
    body1: {
      fontSize: "0.75rem",
      color: "#999999",
    },
  },
  palette: {
    primary: {
      main: "#30D0A1",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
          "&.Mui-disabled": {
            background: "#E5EBE9",
          },
        },
        contained: {
          color: "#FFFFFF",
        },
      },
    },
  },
});

export default theme;
