const palette = {
  red: "red",
  blue: "blue",
};

const theme = {
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

export type Theme = typeof theme;

export default theme;
