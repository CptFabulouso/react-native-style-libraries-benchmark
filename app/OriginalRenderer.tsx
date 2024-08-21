import { useFonts } from "expo-font";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Dripsy from "@/components/OriginalStyleLibs/Dripsy";
import EmotionNative from "@/components/OriginalStyleLibs/EmotionNative";
import Gluestack from "@/components/OriginalStyleLibs/Gluestack";
import NativeWind from "@/components/OriginalStyleLibs/NativeWind";
import Native from "@/components/OriginalStyleLibs/ReactNative";
import Restyle from "@/components/OriginalStyleLibs/Restyle";
import StyledComponents from "@/components/OriginalStyleLibs/StyledComponents";
import Tamagui from "@/components/OriginalStyleLibs/Tamagui";
import TimedRender from "@/components/OriginalStyleLibs/TimedRender";
import Twrnc from "@/components/OriginalStyleLibs/Twrnc";
import { Zephyr } from "@/components/OriginalStyleLibs/Zephyr";
import FastStyles from "@/components/OriginalStyleLibs/FastStyles";
import UnistylesV1 from "@/components/OriginalStyleLibs/UnistylesV1";
import Unistyles from "@/components/OriginalStyleLibs/Unistyles";

export default function App() {
  const [styleType, setStyleType] = useState<any>(undefined);

  const onStyleTypePress = (curry: any) => () => {
    setStyleType(curry);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case "React Native":
        return <Native />;
      case "Styled Components":
        return <StyledComponents />;
      case "Tamagui":
        return <Tamagui />;
      case "Restyle":
        return <Restyle />;
      case "NativeWind":
        return <NativeWind />;
      case "Emotion Native":
        return <EmotionNative />;
      case "Dripsy":
        return <Dripsy />;
      case "Zephyr":
        return <Zephyr />;
      case "Gluestack":
        return <Gluestack />;
      case "Twrnc":
        return <Twrnc />;
      case "FastStyles":
        return <FastStyles />;
      case "UnistylesV2":
        return <Unistyles />;
      case "UnistylesV1":
        return <UnistylesV1 />;
      default:
        return null;
    }
  };

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tap a style library to start rendering</Text>
      <Button title="React Native" onPress={onStyleTypePress("React Native")} />
      <Button
        title="react-native-unistyles (V1)"
        onPress={onStyleTypePress("UnistylesV1")}
      />
      <Button
        title="react-native-unistyles (V2)"
        onPress={onStyleTypePress("UnistylesV2")}
      />
      <Button title="fast-styles" onPress={onStyleTypePress("FastStyles")} />
      <Button
        title="twrnc (tailwind rn class names)"
        onPress={onStyleTypePress("Twrnc")}
      />
      <Button title="Zephyr" onPress={onStyleTypePress("Zephyr")} />
      <Button title="Restyle" onPress={onStyleTypePress("Restyle")} />
      <Button
        title="Styled Components"
        onPress={onStyleTypePress("Styled Components")}
      />
      <Button
        title="Emotion Native"
        onPress={onStyleTypePress("Emotion Native")}
      />
      <Button title="NativeWind" onPress={onStyleTypePress("NativeWind")} />
      <Button title="Tamagui" onPress={onStyleTypePress("Tamagui")} />
      <Button title="Gluestack" onPress={onStyleTypePress("Gluestack")} />
      <Button title="Dripsy" onPress={onStyleTypePress("Dripsy")} />
      {styleType ? (
        <TimedRender key={styleType}>
          <Text style={styles.text}>
            Rendering with <Text style={styles.bold}>{styleType}</Text>
          </Text>
        </TimedRender>
      ) : null}
      {renderStyleLibrary()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    marginVertical: 12,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
