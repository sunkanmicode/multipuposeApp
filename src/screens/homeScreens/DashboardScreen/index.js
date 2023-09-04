import { View, Text } from "react-native";
import React from "react";
import DashboardComp from "../../../components/DashboardComp";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons, Entypo, AntDesign } from "@expo/vector-icons";

const DashboardScreen = ({ navigation }) => {
  const data = [
    {
      title: "Note Taking",
      icon: (
        <SimpleLineIcons name="notebook" size={50} color="rgb(12 74 110)" />
      ),
    },
    {
      title: "News",
      icon: <Entypo name="news" size={50} color="rgb(12 74 110)" />,
    },
    {
      title: "shopping",
      icon: <AntDesign name="shoppingcart" size={50} color="rgb(12 74 110)" />,
    },
    {
      title: "Real Estate",
      icon: <AntDesign name="home" size={50} color="rgb(12 74 110)" />,
    },
  ];
  return <DashboardComp data={data}  navigation={navigation}/>;
};

export default DashboardScreen;