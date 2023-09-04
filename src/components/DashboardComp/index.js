import { View, Text, TouchableOpacity, Image, FlatList, Alert } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";

const DashboardComp = ({data, navigation}) => {
  return (
    <View className="flex-1 py-10 px-6 ">
      <View className="items-center pt-5 "></View>
      <View>
        <View className="pt-5">
          <Text className="text-xl text font-semibold">Hello John Doe, </Text>
          <Text className="font-bold text-[18px]">
            Welcome to your Dashboard
          </Text>

          <FlatList
            data={data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            //   keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity className="w-[170px] h-[260] items-center justify-center mx-1 mt-4 bg-slate-300" onPress={()=>{
                item.title == "Note Taking"
                  ? navigation.navigate("NoteTakingScreen")
                  : item.title == "News"
                  ? navigation.navigate("NewsfeedScreen")
                  : item.title == "shopping"
                  ? Alert.alert("Screen is under review"): Alert.alert("Screen is under review")
              }}>
                <View className="">
                 {item.icon}
                </View>
                <Text className="text-lg">{item.title}</Text>
              </TouchableOpacity>
            )}
          />

          {/* <View className="w-[161px] h-[260px] bg-red-500"></View> */}
        </View>
      </View>
    </View>
  );
};

export default DashboardComp;
