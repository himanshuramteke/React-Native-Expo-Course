import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Screen</Text>
      <Link href={"/feed"}>Go to feed</Link>
      <Link href={"/post/123"}>Go to post id</Link>
    </View>
  );
}
