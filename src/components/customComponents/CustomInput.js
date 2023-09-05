import { View, Text, TextInput } from "react-native";
import React from 'react'

const CustomInput = ({
  onChangeText,
  icon,
  value,
  style,
  label,
  secureTextEntry,
  iconPostion,
  placeholder,
  error,
  keyboardType,
  multiline,
}) => {
  const [focused, setFocused] = React.useState(false);

  const fontFamily = "font-Plus-regular";

  const getBorderColor = () => {
    if (focused) return "border-blue-500";
    if (error) {
      return "border-red-700";
    }
  };

  const getFlexDirection = () => {
    if (!icon && !iconPostion) {
      return "flex-row";
    }
    if (icon && iconPostion) {
      if (iconPostion === "left") {
        return "flex-row";
      } else {
        if (iconPostion === "right") {
          return "flex-row-reverse";
        }
      }
    }
  };
  return (
    <View className="py-3">
      {label && (
        <Text className="text-[#2C3131] text-sm">{label}</Text>
      )}
      <View
        className={`px-2 h-14 border border-gray-300 rounded-md items-center mt-2 ${getFlexDirection()} ${getBorderColor()}`}
      >
        <View>{icon && icon}</View>
        <TextInput
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          multiline={multiline}
          keyboardType={keyboardType}
          className="flex-1 h-11 px-2"
          style={style}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </View>
      {error && (
        <Text className="text-red-700 text-xs pt-2">
          {error}
        </Text>
      )}
    </View>
  );
};

export default CustomInput