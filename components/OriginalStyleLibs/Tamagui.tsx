import React from "react";
import { View } from "react-native";
import { Stack, TamaguiProvider } from "tamagui";

import config from "../../tamagui.config";
import { ORIGINAL_COUNT } from "@/utils";

const Tamagui = () => {
  return (
    <TamaguiProvider config={config}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(ORIGINAL_COUNT).fill(0).map((_, i) => (
          <Stack borderColor="red" borderWidth={2} key={i} padding={5} />
        ))}
      </View>
    </TamaguiProvider>
  );
};

export default Tamagui;
