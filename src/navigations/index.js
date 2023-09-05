import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./HomeNavigation";
import AuthNavigation from "./AuthNavigation";
import { useSelector } from "react-redux";

export default function AppNavigation() {
  const { isLoggedIn } = useSelector((state) => state.user);

  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  console.log(isLoggedIn,isAuthenticated, "isLoggedIn");

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
