import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./HomeNavigation";
import AuthNavigation from "./AuthNavigation";

export default function AppNavigation() {
  const [isloggedIn, setIsLoggedIn] = React.useState(true);
  return (
    <NavigationContainer>
      {isloggedIn ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
