import { View } from "react-native";
import { UnistylesTheme, createUnistyles } from "react-native-unistyles-v1";
import { TestComponentProps } from "../Tester/TestComponent";
import { createTestScreen } from "../Tester";
import theme from "@/themes/unistyles-theme-v1";
import { BOX_SIZE } from "@/utils";

const breakpoints = {
  xs: 0,
  sm: 200,
  md: 500,
};

const { createStyles, useStyles } = createUnistyles(breakpoints);

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

const OriginalTestRenderer = () => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.original} />;
};

const TestScreen = createTestScreen({
  name: "UnistylesV1",
  renderInlineStyle: InlineStyleRenderer,
  renderPredefinedStyle: PredefinedStyleRenderer,
  OriginalTest: OriginalTestRenderer,
});

const UnistylesV1 = () => {
  return (
    <UnistylesTheme theme={theme}>
      <TestScreen />
    </UnistylesTheme>
  );
};

const stylesheet = createStyles((theme: any) => ({
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
    borderColor: theme.colors.red,
    padding: 5,
    borderWidth: 2,
  },
}));

export default UnistylesV1;
