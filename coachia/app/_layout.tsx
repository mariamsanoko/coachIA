import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          headerTitle: "Coach IA",
      }} />
      <Stack.Screen name="about" 
      options={{
        headerTitle: "À propos"
      }}/>
    </Stack> 
  );
}
