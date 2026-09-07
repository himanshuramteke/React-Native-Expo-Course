import StepCounter from "@/components/step-counter";
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
      {/* <RotationIndicator /> */}
      {/* <Compass /> */}
      {/* <LightMood /> */}
      <StepCounter />
    </View>
  );
}
