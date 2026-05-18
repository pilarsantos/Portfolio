import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
  },
  palette: {
    primary: {
      main: "#b163ff",
      light: "#f0eaff",
      dark: "#7c3aed",
    },
    secondary: {
      main: "#ec4899",
      light: "#f472b6",
      dark: "#c026d3",
    },
    background: {
      default: "#07040d",
      paper: "#0d0920",
    },
    text: {
      primary: "#f0eaff",
      secondary: "#9999bb",
      disabled: "#555566",
    },

    custom: {
      cyan: "#22d3ee",
      cyanDark: "#06b6d4",
      magenta: "#c026d3",
      purpleDark: "#3b0764",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      cyan: string;
      cyanDark: string;
      magenta: string;
      purpleDark: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      cyan?: string;
      cyanDark?: string;
      magenta?: string;
      purpleDark?: string;
    };
  }
}