import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Details() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to Feed Screen</Text>
      <Link href={"/explore"}>Go to explore</Link>
    </View>
  );
}
