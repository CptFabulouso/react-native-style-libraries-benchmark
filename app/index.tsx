import { useFonts } from "expo-font";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { countHolder } from "@/utils";

type StyleLib =
  | "React Native"
  | "Themed Components"
  // | "Styled Components"
  | "Tamagui"
  | "Restyle"
  // | "NativeWind"
  // | "Emotion Native"
  // | "Dripsy"
  // | "Zephyr"
  // | "Gluestack"
  // | "Twrnc"
  // | "FastStyles"
  | "UnistylesV2"
  | "UnistylesV1";

const styleLibs: StyleLib[] = [
  "React Native",
  "Themed Components",
  "Tamagui",
  "Restyle",
  "UnistylesV2",
  "UnistylesV1",
];

export default function App() {
  const countValue = countHolder.useCount();

  const onStyleTypePress = (curry: StyleLib) => () => {
    router.navigate(`/${curry}`);
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
      <Text>Number of elements to render is</Text>
      <TextInput
        value={"" + countValue}
        onChangeText={countHolder.setCount}
        style={styles.input}
      />
      <Text style={styles.text}>Tap a style library to start rendering</Text>
      {styleLibs.map((lib) => {
        return <Button key={lib} title={lib} onPress={onStyleTypePress(lib)} />;
      })}
      <Button
        title="Original renderer"
        onPress={() => {
          router.navigate(`/OriginalRenderer`);
        }}
      />
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
  input: {
    marginTop: 5,
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
  },
});
