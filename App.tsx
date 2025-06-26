import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>count: {count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
