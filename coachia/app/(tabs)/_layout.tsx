import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
          options={{
            headerTitle: "Coach IA",
            headerLeft: () => <></>
      }} 
    />
      <Tabs.Screen 
        name="about" 
        options={{
          headerTitle: "À propos",
        }}
    />
      <Tabs.Screen 
        name="+not-found" 
        options={{
          headerShown: false,
      }}
      
      />
    </Tabs> 
  );
}
