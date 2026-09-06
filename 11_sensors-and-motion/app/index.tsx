import { View } from "react-native";
import Compass from "../components/compass";

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
      {/* <RotationIndicator /> */}
      <Compass />
    </View>
  );
}
