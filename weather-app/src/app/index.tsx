import { useWeather } from "@/hooks/useWeather";
import { getBackgroundImage } from "@/utils/weatherUtils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "react-native-screens";

export default function Index() {
  const {
    aqi,
    loading,
    errorMsg,
    forecast,
    getLocationWeather,
    searchCity,
    weather,
  } = useWeather();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (errorMsg || !weather) {
    return (
      <View style={styles.centerContainer}>
        <MaterialCommunityIcons
          name="alert-circle-outline"
          size={48}
          color="#FF6B6B"
        />
        <Text style={styles.errorText}>
          {errorMsg || "Something went wrong"}
        </Text>
        <TouchableOpacity
          onPress={getLocationWeather}
          style={styles.retryButton}
        >
          <Text style={styles.retryText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const bgImage = getBackgroundImage(
    weather.weather[0].main,
    weather.weather[0].main,
  );

  return (
    <ImageBackground source={bgImage} style={styles.bgImage} resizeMode="cover">
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle={"light-content"}
            backgroundColor={"transparent"}
            translucent
          />
          <SearchBar onSearch={searchCity} />

          <ScrollView
            style={styles.scrollContent}
            contentContainerStyle={styles.scrollContent}
            showsHorizontalScrollIndicator={false}
          >
            <CurrentWeather weather={weather} aqi={aqi} />
            <ForecastList data={forecast} />
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  retryButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FF6B6B",
    borderRadius: 20,
  },
  retryText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
