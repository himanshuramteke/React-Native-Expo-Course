import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./screens/details";
import Home from "./screens/home";
import Profile from "./screens/profile";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function App() {
  return <RootStack />;
}
