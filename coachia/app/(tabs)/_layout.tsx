import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabsLayout() {
  return (
    <Tabs  
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: true,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
          options={{
            headerTitle: "Coach IA",
            tabBarIcon: ({focused, color }) => (
              <Ionicons 
                name={focused ? "home-sharp" : "home-outline" }
                color={color}
               size={24} 
              /> 
            ),    
      }} 
    />
      <Tabs.Screen 
        name="about" 
        options={{
          title: "À propos",
          tabBarIcon: ({focused, color }) => (
             <Ionicons 
                name={focused ? "information-circle" : "information-circle" }
                color={color}
               size={24} 
              /> 

          ),
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
