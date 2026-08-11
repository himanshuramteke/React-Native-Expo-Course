import { Link } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link screen={"details"}>Go to details</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
