import { Link } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Details = () => {
  return (
    <View>
      <Text>Details</Text>
      <Link screen={"profile"}>Go to profile</Link>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
