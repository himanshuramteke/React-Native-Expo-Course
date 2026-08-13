import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  PokemonList: undefined;
  PokemonDetail: { pokemon: any }; //TODO:FIX LATER
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
export type PokemonDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "PokemonDetail"
>;
