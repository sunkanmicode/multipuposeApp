import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const CustomButton = ({
  title,
  disabled,
  primary,
  loading,
  onPress,
}) => {
  const getBgColor = () => {
    if (disabled) return "bg-slate-300";
    if (primary) return "bg-green-400";
  };

  const disabledTextBtn = disabled ? "text-black" : "text-black";

  return (
    <TouchableOpacity
      className={`px-2 h-12 border border-gray-300 rounded-md items-center mt-2 py-3 ${getBgColor()}`}
      disabled={disabled}
      onPress={onPress}
    >
      <View className="flex-row">
        {title && (
          <Text className={`${disabledTextBtn} `}>
            {loading ? <ActivityIndicator /> : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
