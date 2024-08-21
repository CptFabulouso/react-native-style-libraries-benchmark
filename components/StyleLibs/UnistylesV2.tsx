import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { TestComponentProps } from "../Tester/TestComponent";
import { createTestScreen } from "../Tester";
import "@/themes/unistyles-theme";
import { BOX_SIZE } from "@/utils";

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
  name: "Unistyles",
  renderInlineStyle: InlineStyleRenderer,
  renderPredefinedStyle: PredefinedStyleRenderer,
  OriginalTest: OriginalTestRenderer,
});

const Unistyles = () => {
  return <TestScreen />;
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
  original: {
    borderColor: theme.colors.red,
    padding: 5,
    borderWidth: 2,
  },
}));

export default Unistyles;
