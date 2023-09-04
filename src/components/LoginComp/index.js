import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import CustomInput from "../customComponents/CustomInput";
import CustomButton from "../customComponents/CustomButton";

const LoginComp = ({
  onchangeText,
  onSubmit,
  isSecureEntry,
  setIsSecureEntry,
  navigation,
  form,
}) => {
  return (
    <ScrollView className="flex-1 py-10 px-6">
      <View className="w-80 h-52">
        <Image
          source={require("../../assets/logo_1.png")}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            // borderTopRightRadius: 5,
          }}
        />
      </View>
      <View className="">
        <View className="mb-10 items-center">
          <Text className="text-1xl">Welcome To Multipurpose App,</Text>
          <Text className="text-[#6C7072] text-xs">
            Good to see you.
          </Text>
        </View>
        <CustomInput
          label="Email Address"
          // value={value}
          onChangeText={(value) => {
            onchangeText("email", value);
          }}
          placeholder={"Input your email adddres"}
          // style={styles.input}
          // error={"This Feild is require"}
        />

        <CustomInput
          label="Create password"
          // value={value2}
          secureTextEntry={isSecureEntry}
          onChangeText={(value) => {
            onchangeText("password", value);
          }}
          placeholder={"Create your password"}
          icon={
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry((prev) => !prev);
              }}
            >
              {/* <FontAwesome5 name="eye" size={24} color="black" /> */}

              {isSecureEntry ? (
                <FontAwesome5 name="eye-slash" size={24} color="black" />
              ) : (
                <FontAwesome5 name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
          }
          iconPostion="right"
          // style={styles.input}
        />

        <CustomButton
          primary
          title="Login"
        //   loading={isLoading}
        //   disabled={isLoading}
          onPress={onSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default LoginComp;
