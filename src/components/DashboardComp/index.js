import { View, Text, TouchableOpacity, Image, FlatList, Alert } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";

const DashboardComp = ({ data, userInfo, navigation }) => {
  return (
    <View className="flex-1  py-10 px-6 ">
      <View className="items-center pt-5 "></View>
      <View>
        <View className="pt-5">
          <Text className="font-bold text-[20px] text-green-800">
            Multispurpose Dashboard
          </Text>
          <Text className="text-sm text text-green-950 font-semibold">
            Welcome {userInfo.data.email}
          </Text>

          <FlatList
            data={data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            //   keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="w-[170px] h-[260] items-center justify-center mx-1 mt-4 bg-green-400 rounded-md"
                onPress={() => {
                  item.title == "Note Taking"
                    ? navigation.navigate("NoteTakingScreen")
                    : item.title == "News"
                    ? navigation.navigate("NewsfeedScreen")
                    : item.title == "shopping"
                    ? Alert.alert("Screen is under review")
                    : Alert.alert("Screen is under review");
                }}
              >
                <View className="">{item.icon}</View>
                <Text className="text-lg text-green-950">{item.title}</Text>
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
