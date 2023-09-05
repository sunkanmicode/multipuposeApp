import { View, Text } from "react-native";
import React from "react";
import DashboardComp from "../../../components/DashboardComp";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons, Entypo, AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const DashboardScreen = ({ navigation }) => {
  const userInfo = useSelector((state) => state.user);

  const data = [
    {
      title: "Note Taking",
      icon: (
        <SimpleLineIcons name="notebook" size={50} color="rgb(22 101 52)" />
      ),
    },
    {
      title: "News",
      icon: <Entypo name="news" size={50} color="rgb(22 101 52)" />,
    },
    {
      title: "shopping",
      icon: <AntDesign name="shoppingcart" size={50} color="rgb(22 101 52)" />,
    },
    {
      title: "Real Estate",
      icon: <AntDesign name="home" size={50} color="rgb(22 101 52)" />,
    },
  ];
  return (
    <DashboardComp data={data} navigation={navigation} userInfo={userInfo} />
  );
};

export default DashboardScreen;
