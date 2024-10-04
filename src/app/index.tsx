import { useEffect } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
export default function Root() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/(auth)/login");
    }, 2000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is Root Screen</Text>
    </View>
  );
}
