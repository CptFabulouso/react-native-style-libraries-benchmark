import React from "react";
import { Stack, TamaguiProvider } from "tamagui";
import { createTestScreen } from "@/components/Tester";

import config from "@/tamagui.config";
import { TestComponentProps } from "../Tester/TestComponent";
import { BOX_SIZE } from "@/utils";

const InlineStyleRenderer = (props: TestComponentProps) => {
  return (
    <Stack backgroundColor={props.color} width={BOX_SIZE} height={BOX_SIZE} />
  );
};

const OriginalTestRenderer = () => {
  return <Stack borderColor="red" borderWidth={2} padding={5} />;
};

const TestScreen = createTestScreen({
  name: "Tamagui",
  renderInlineStyle: InlineStyleRenderer,
  OriginalTest: OriginalTestRenderer,
});

const Tamagui = () => {
  return (
    <TamaguiProvider config={config}>
      <TestScreen />
    </TamaguiProvider>
  );
};

export default Tamagui;
