import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from 'react'
import { MaterialIcons, EvilIcons, Entypo, Feather } from "@expo/vector-icons";
import CustomInput from "../customComponents/CustomInput";


const NoteTakingComp = ({ navigation }) => {
  return (
    <>
      <View className="py-10 px-6 my-5">
        <View className="flex-row justify-between">
          <TouchableOpacity
            className="w-25 h-6 border border-gray-300"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[18px] text-[#090A0A]">My Notes</Text>
          <View />
        </View>
        <View className="mt-5">
          <Text>Jxohn@gmail.com</Text>
        </View>
        <View>
          <CustomInput
            placeholder="search note"
            icon={<EvilIcons name="search" size={24} color="black" />}
            iconPostion="right"
          />
        </View>
        <View className="py-20 items-center">
          <View className="my-5">
            <Feather name="book-open" size={50} color="black" />
          </View>
          <Text className="text-lg font-thin">No Note in my Note</Text>
          <Text>Tap '+ New Note' button to add a new note</Text>
        </View>
      </View>
      <TouchableOpacity
        className="w-[70px] h-[70] bg-green-400 items-center justify-center rounded-full absolute bottom-10
        right-10"
      >
        <Entypo name="plus" size={24} color="black" />
      </TouchableOpacity>
    </>
  );
};

export default NoteTakingComp