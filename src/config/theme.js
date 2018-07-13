import { createMuiTheme } from "@material-ui/core/styles";

const secondary = {
  50: "#c0ffff",
  100: "#c0ffff",
  200: "#c0ffff",
  300: "#c0ffff",
  400: "#8bffea",
  500: "#8bffea",
  600: "#8bffea",
  700: "#55cbb8",
  800: "#55cbb8",
  900: "#55cbb8",
  A100: "#c0ffff",
  A200: "#8bffea",
  A400: "#8bffea",
  A700: "#55cbb8"
};

const primary = {
  50: "#545454",
  100: "#545454",
  200: "#545454",
  300: "#545454",
  400: "#2b2b2b",
  500: "#2b2b2b",
  600: "#2b2b2b",
  700: "#111111",
  800: "#111111",
  900: "#111111"
};

const themeConfig = {
  palette: {
    primary,
    secondary,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: "#f3f3f3"
    }
  },
  shadows: new Array(25).fill(""),
  button: {
    height: 40,
    minWidth: 130
  },
  shape: {
    borderRadius: 6
  },
  typography: {
    fontFamily: [
      "IBM Plex Mono",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 6
      }
    },
    MuiFormControl: {
      root: {
        width: "100% !important"
      }
    }
  }
};

export default createMuiTheme(themeConfig);
