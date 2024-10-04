import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

import { ThemedText } from "@components/ThemedText";
export default function OutSide1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is Outside Screen</Text>
      <Link href="/" style={{}}>
        <ThemedText type="link">Go to Outside Screen screen!</ThemedText>
      </Link>
    </View>
  );
}
