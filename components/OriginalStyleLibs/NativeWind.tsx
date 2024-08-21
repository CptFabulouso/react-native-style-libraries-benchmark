import { View } from "react-native";
import { styled } from "nativewind";
import { ORIGINAL_COUNT } from "@/utils";

const StyledView = styled(View, "border-2 p-1.5 border-red-600");

const NativeWind = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(ORIGINAL_COUNT).fill(0).map((_, i) => (
        <StyledView key={i} />
      ))}
    </View>
  );
};

export default NativeWind;
