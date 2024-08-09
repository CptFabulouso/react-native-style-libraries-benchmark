import { UnistylesRegistry } from "react-native-unistyles";

const palette = {
  red: "red",
  blue: "blue",
};

export const theme = {
  colors: {
    red: palette.red,
    blue: palette.blue,
  },
  spacing: {
    xs: 5,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
};

export const breakpoints = {
  xs: 0,
  sm: 200,
  md: 500,
};

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: theme,
  })
  .addConfig({
    adaptiveThemes: true,
  });

export default theme;
