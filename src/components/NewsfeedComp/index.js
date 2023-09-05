import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, } from "react-native";
import React from 'react'
import { MaterialIcons, EvilIcons, Entypo, Feather } from "@expo/vector-icons";


const NewfeedComp = ({ navigation, data, loading, error }) => {
  return (
    <View className="py-10 px-6 my-5">
      <View className="flex-row justify-between mb-5">
        <TouchableOpacity
          className="w-25 h-6 border border-gray-300"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-[18px] text-[#090A0A]">New Feeds</Text>
        <View />
      </View>
      {loading && <ActivityIndicator size={50} className="py-20" />}
      {!loading && (
        <FlatList
        showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex-row items-center justify-between bg-white p-4 rounded-lg my-1"
              key={item.id}
              onPress={() => {
                //   selectLesson(item._id);
              }}
            >
              <View className="flex-row items-center">
                <View className="w-[30px] h-[30px] bg-[#E5E9EB] items-center justify-center rounded-full mr-2">
                  <Text>{item.id}</Text>
                </View>
                <View>
                  <Text className="font-[PlusMedium] text-[13px] w-[300]">
                    {item.title}
                  </Text>
                  <Text className=" w-[300] font-[PlusMedium] text-[10px] text-[#CCCCCC]">
                    {item.body}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default NewfeedComp