import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, FlatList, StyleSheet, Text } from "react-native";
import Row from "./components/Row";
import { DATA } from "./Data";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Row person={item} />} // Käytetään "Row" komponenttia
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
