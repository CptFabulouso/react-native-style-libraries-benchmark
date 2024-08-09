import { BOX_SIZE } from "@/utils";
import { createTheme } from "@shopify/restyle";

const palette = {
  red: "#FF0000",
  blue: "#0000DD",
};

const theme = createTheme({
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
  boxVariants: {
    red: {
      width: BOX_SIZE,
      height: BOX_SIZE,
      backgroundColor: "red",
    },
    blue: {
      width: BOX_SIZE,
      height: BOX_SIZE,
      backgroundColor: "blue",
    },
  },
});

export type Theme = typeof theme;

export default theme;
