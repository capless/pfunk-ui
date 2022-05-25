import { createTheme } from "@mui/material/styles";
import shadows, { Shadows } from "@mui/material/styles/shadows";

const newShadow = "0px 0px 15px rgba(0, 0, 0, 0.1)";
const customShadows = shadows.map((e, i) =>
  i === 24 ? newShadow : e
) as Shadows;

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
  shadows: customShadows,
});

export default theme;
