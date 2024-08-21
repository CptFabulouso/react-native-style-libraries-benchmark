import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { ORIGINAL_COUNT } from "@/utils";
import "@/themes/unistyles-theme";

const Unistyles = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      {new Array(ORIGINAL_COUNT).fill(0).map((_, i) => (
        <View key={i} style={styles.box} />
      ))}
    </View>
  );
};

const stylesheet = createStyleSheet((theme: any) => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  box: {
    borderColor: theme.colors.red,
    padding: 5,
    borderWidth: 2,
  },
}));

export default Unistyles;
