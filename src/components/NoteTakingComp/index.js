import { View, Text, TouchableOpacity, TextInput, Modal } from "react-native";
import React from "react";
import { MaterialIcons, EvilIcons, Entypo, Feather } from "@expo/vector-icons";
import CustomInput from "../customComponents/CustomInput";
import { removeNote } from "../../redux/noteTakingSlice";

const NoteTakingComp = ({
  navigation,
  modalVisible,
  setModalVisible,
  showList,
  setShowList,
  addNote,
  setAddNote,
  userInfo,
  handleAddNote,
  noteList,
  handleRemoveNote,
  onchangeText,
  filterNote,
}) => {
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
          <Text>{userInfo.data.email}</Text>
        </View>

        <View>
          {modalVisible ? (
            <View className="flex-row mt-[30px] mb-5">
              <View className="h-14 border border-gray-300 rounded-md items-center flex-1 flex-row">
                <TextInput
                  placeholder="Add note"
                  className="font-bold  flex-1"
                  onChangeText={(value) => setAddNote(value)}
                />
              </View>

              <TouchableOpacity
                className="h-14 w-[50px] bg-green-400 ml-[10px] justify-center items-center rounded-lg"
                onPress={() => {
                  setModalVisible(false);
                  handleAddNote(addNote);
                }}
              >
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <CustomInput
              placeholder="search note"
              icon={<EvilIcons name="search" size={24} color="black" />}
              onChangeText={(value) => {
                onchangeText(value);
              }}
              iconPostion="right"
            />
          )}
        </View>
        {filterNote.length <= 0 ? (
          <View className="py-20 items-center">
            <View className="my-5">
              <Feather name="book-open" size={50} color="black" />
            </View>
            <Text className="text-lg font-thin">No Note in my Note</Text>
            <Text>Tap '+ New Note' button to add a new note</Text>
          </View>
         ) : (
          <>
            {filterNote?.map((item, index) => (
              <View
                className="flex-row items-center justify-between bg-white p-4 rounded-lg my-1"
                key={item}
                onPress={() => {
                  //   selectLesson(item._id);
                }}
              >
                <View className="flex-row items-center">
                  <View className="w-[30px] h-[30px] bg-[#E5E9EB] items-center justify-center rounded-full mr-2">
                    <Text>{index + 1}</Text>
                  </View>
                  <View>
                    <Text className="font-[PlusMedium] text-[13px]">
                      {item}
                    </Text>
                    <Text className="font-[PlusMedium] text-[10px] text-[#CCCCCC]">
                      12: 30pm
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  className="flex-row items-center"
                  onPress={() => {
                    handleRemoveNote(item);
                  }}
                >
                  <MaterialIcons
                    name="delete-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            ))}
          </>
         )}  
      </View>
      {!modalVisible && (
        <TouchableOpacity
          className="w-[70px] h-[70] bg-green-400 items-center justify-center rounded-full absolute bottom-10
        right-10"
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Entypo name="plus" size={24} color="black" />
        </TouchableOpacity>
      )}
    </>
  );
};

export default NoteTakingComp;
