import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/homeScreens/DashboardScreen";
import NoteTakingScreen from "../screens/homeScreens/NoteTakingScreen";
import NewsfeedScreen from "../screens/homeScreens/NewsfeedScreen";

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="DashboardScreen" component={DashboardScreen} />
      <HomeStack.Screen name="NoteTakingScreen" component={NoteTakingScreen} />
      <HomeStack.Screen name="NewsfeedScreen" component={NewsfeedScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
