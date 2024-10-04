import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { View } from "react-native";

const DrawerLayout = () => {
  const CustomDrawerComponent = () => {
    return (
      <View style={{ marginTop: 30 }}>
        <DrawerItem
          label={"home"}
          onPress={() => router.push("/(drawer)/(tabs)")}
        />
        <DrawerItem
          label={"scrren outside tabs 1"}
          onPress={() => router.push("/outside1")}
        />
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={() => <CustomDrawerComponent />}></Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
