
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue dans CoachIAApp !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#25292e",
  },
  text: {
    color: "white",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#ffffff",
  },
});
