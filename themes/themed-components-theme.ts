import {
  initThemeProvider,
  createThemedBaseStylesCreator,
} from "@pavelgric/react-native-theme-provider";

import { BOX_SIZE } from "@/utils";

const baseStylesCreator = createThemedBaseStylesCreator<Themes>()((t) => ({
  redBox: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: t.colors.red,
  },
  blueBox: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: t.colors.blue,
  },
}));

const palette = {
  red: "red",
  blue: "blue",
};

const themes = {
  light: {
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
  },
};

export type Themes = typeof themes;
export type Theme = typeof themes.light;
export type ThemeColors = Theme["colors"];
export type ThemeColorKey = keyof ThemeColors;

export const {
  createUseStyle,
  createStyle,
  useTheme,
  useThemeDispatch,
  ThemeProvider,
} = initThemeProvider({ themes, initialTheme: "light", baseStylesCreator });
