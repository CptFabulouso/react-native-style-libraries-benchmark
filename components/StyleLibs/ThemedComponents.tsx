import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { TestComponentProps } from "../Tester/TestComponent";
import { createTestScreen } from "../Tester";
import "@/themes/unistyles-theme";
import { BOX_SIZE } from "@/utils";
import { ThemeProvider } from "@/themes/themed-components-theme";

const InlineStyleRenderer = (props: TestComponentProps) => {
  const { styles } = useStyles(stylesheet);

  return <View style={{ ...styles.redBox, backgroundColor: props.color }} />;
};

const PredefinedStyleRenderer = (props: TestComponentProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={props.color === "red" ? styles.redBox : styles.blueBox} />
  );
};

const TestScreen = createTestScreen({
  name: "Themed Components",
  renderInlineStyle: InlineStyleRenderer,
  renderPredefinedStyle: PredefinedStyleRenderer,
});

const ThemedComponents = () => {
  return (
    <ThemeProvider initialTheme="light">
      <TestScreen />
    </ThemeProvider>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  redBox: {
    backgroundColor: theme.colors.red,
    width: BOX_SIZE,
    height: BOX_SIZE,
  },
  blueBox: {
    backgroundColor: theme.colors.blue,
    width: BOX_SIZE,
    height: BOX_SIZE,
  },
}));

export default ThemedComponents;
