import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface GlassViewProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const GlassView: React.FC<GlassViewProps> = ({ children, style }) => {
  return <View style={(styles.glass, style)}>{children}</View>;
};

export default GlassView;

const styles = StyleSheet.create({
  glass: {},
});
