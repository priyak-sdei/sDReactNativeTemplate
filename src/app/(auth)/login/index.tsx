import { View, Text } from "react-native";

import { ThemedText } from "@components/ThemedText";
import { ThemedView } from "@components/ThemedView";
import { Link, Stack } from "expo-router";
export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is Login In Screen</Text>
      <Link href="/register" style={{}}>
        <ThemedText type="link">Go to Register screen!</ThemedText>
      </Link>
    </View>
  );
}
