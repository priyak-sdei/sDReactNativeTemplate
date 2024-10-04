import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

import { ThemedText } from "@components/ThemedText";
export default function Register() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is Register Screen</Text>
      <Link href="/(drawer)" style={{}}>
        <ThemedText type="link">Go to Tabs screen!</ThemedText>
      </Link>
    </View>
  );
}
