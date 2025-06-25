import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl font-bold text-blue-500">
        Welcome!
      </Text>
      <Link href="/login" style={styles.navButton}>Login page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  navButton: {
    width: 150,
    backgroundColor: "coral",
    borderRadius: 8,
    height: 30,
    fontSize: 25,
    textAlign: "center",
    display: "flex",
    justifyContent: "center"
  }
});
