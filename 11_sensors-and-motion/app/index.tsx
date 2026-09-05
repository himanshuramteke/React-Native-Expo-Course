import TiltCounter from "@/components/tilt-counter";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TiltCounter />
    </View>
  );
}
