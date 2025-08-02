import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";


export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: "Oups! la page n'existe pas !"}} />
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue dans CoachIAApp !</Text>
      <Link href={"/"} style={styles.button}>
      retourner accueil</Link>
    </View>
    </>
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
