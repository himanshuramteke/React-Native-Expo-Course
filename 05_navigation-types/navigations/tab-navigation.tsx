import Details from "@/app/screens/details";
import Home from "@/app/screens/home";
import Profile from "@/app/screens/profile";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f4511e",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#eee",
        },
        headerStyle: { backgroundColor: "#222" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: "Home ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="details"
        component={Details}
        options={{
          title: "Details",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="folder" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return <TabNavigator />;
}
