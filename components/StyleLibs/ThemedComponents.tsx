import { View } from "react-native";
import { TestComponentProps } from "../Tester/TestComponent";
import { createTestScreen } from "../Tester";
import "@/themes/unistyles-theme";
import { BOX_SIZE } from "@/utils";
import {
  ThemeProvider,
  createUseStyle,
} from "@/themes/themed-components-theme";

const InlineStyleRenderer = (props: TestComponentProps) => {
  const styles = useStyles();

  return <View style={{ ...styles.redBox, backgroundColor: props.color }} />;
};

const PredefinedStyleRenderer = (props: TestComponentProps) => {
  const styles = useStyles();

  return (
    <View style={props.color === "red" ? styles.redBox : styles.blueBox} />
  );
};

const OriginalTestRenderer = () => {
  const styles = useStyles();

  return <View style={styles.original} />;
};

const TestScreen = createTestScreen({
  name: "Themed Components",
  renderInlineStyle: InlineStyleRenderer,
  renderPredefinedStyle: PredefinedStyleRenderer,
  OriginalTest: OriginalTestRenderer,
});

const ThemedComponents = () => {
  return (
    <ThemeProvider initialTheme="light">
      <TestScreen />
    </ThemeProvider>
  );
};

const useStyles = createUseStyle((theme) => ({
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
  original: {
    borderColor: "red",
    borderWidth: 2,
    padding: 5,
  },
}));

export default ThemedComponents;
