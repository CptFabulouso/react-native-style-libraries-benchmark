import { useFonts } from "expo-font";
import { Button, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

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
  | "Unistyles"
  | "UnistylesV1";

const styleLibs: StyleLib[] = [
  "React Native",
  "Themed Components",
  "Tamagui",
  "Restyle",
  "Unistyles",
  "UnistylesV1",
];

export default function App() {
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
      <Text style={styles.text}>Tap a style library to start rendering</Text>
      {styleLibs.map((lib) => {
        return <Button key={lib} title={lib} onPress={onStyleTypePress(lib)} />;
      })}
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
