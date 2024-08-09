import { View } from "react-native";
import styled from "@emotion/native";
import { COUNT } from "@/utils";

const EmotionNative = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <StyledView key={i} />
      ))}
    </View>
  );
};

export default EmotionNative;

const StyledView = styled.View`
  border-color: red;
  border-width: 2px;
  padding: 5px;
`;
