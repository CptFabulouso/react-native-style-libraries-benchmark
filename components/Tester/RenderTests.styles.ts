import { StyleSheet } from "react-native";

const staticStyles = StyleSheet.create({
  testContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  title: {
    marginVertical: 10,
    textAlign: "center",
  },
  box: {
    width: 5,
    height: 5,
  },
  boxRed: {
    width: 5,
    height: 5,
    backgroundColor: "red",
  },
  boxBlue: {
    width: 5,
    height: 5,
    backgroundColor: "blue",
  },
  button: {
    marginVertical: 10,
  },
});

export { staticStyles };
