import { StyleSheet, View } from "react-native";
import { BOX_SIZE } from "@/utils";
import { createTestScreen } from "../Tester";
import { TestComponentProps } from "../Tester/TestComponent";

const InlineStyleRenderer = (props: TestComponentProps) => {
  return <View style={{ ...styles.redBox, backgroundColor: props.color }} />;
};

const PredefinedStyleRenderer = (props: TestComponentProps) => {
  return (
    <View style={props.color === "red" ? styles.redBox : styles.blueBox} />
  );
};

const TestScreen = createTestScreen({
  name: "React Native",
  renderInlineStyle: InlineStyleRenderer,
  renderPredefinedStyle: PredefinedStyleRenderer,
});

const Native = () => {
  return <TestScreen />;
};

const styles = StyleSheet.create({
  redBox: {
    backgroundColor: "red",
    width: BOX_SIZE,
    height: BOX_SIZE,
  },
  blueBox: {
    backgroundColor: "blue",
    width: BOX_SIZE,
    height: BOX_SIZE,
  },
});

export default Native;
