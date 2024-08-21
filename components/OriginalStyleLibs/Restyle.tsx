import { View } from "react-native";
import { createBox, ThemeProvider } from "@shopify/restyle";
import theme from "@/themes/restyle-theme";
import { ORIGINAL_COUNT } from "@/utils";

const Box = createBox();

const Restyle = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(ORIGINAL_COUNT).fill(0).map((_, i) => (
          <Box key={i} padding="xs" borderColor="red" borderWidth={2} />
        ))}
      </View>
    </ThemeProvider>
  );
};

export default Restyle;
