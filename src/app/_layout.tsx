import { Stack } from "expo-router";
import "react-native-reanimated";
import { Providers } from "@providers/index";

export default function RootLayout() {
  return (
    <Providers>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* This Stack will wrap all screens globally */}
        {/* Nested layout will automatically inherit this structure */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </Providers>
  );
}
