import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Details = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Details</Text>
      {/* <Link screen={"profile"}>Go to profile</Link> */}

      <Pressable onPress={() => navigation.navigate("profile")}>
        <Text>Go to profile</Text>
      </Pressable>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
