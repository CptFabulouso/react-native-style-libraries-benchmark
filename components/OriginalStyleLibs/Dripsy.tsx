import React from "react";
import { View } from "react-native";
import { View as ViewD } from "dripsy";
import { DripsyProvider, makeTheme } from "dripsy";
import { ORIGINAL_COUNT } from "@/utils";

const theme = makeTheme({});

const Dripsy = () => {
  return (
    <DripsyProvider theme={theme}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(ORIGINAL_COUNT).fill(0).map((_, i) => (
          <ViewD
            key={i}
            sx={{
              borderColor: "red",
              borderWidth: 2,
              padding: 5,
            }}
          />
        ))}
      </View>
    </DripsyProvider>
  );
};

export default Dripsy;
