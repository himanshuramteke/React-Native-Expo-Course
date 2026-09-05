import RotationIndicator from "@/components/rotation-indicator";
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
      {/* <TiltCounter /> */}
      <RotationIndicator />
    </View>
  );
}
