import { View, Text } from "react-native";
import React from "react";
const Header = (props) => {
  return (
    <View className="items-center text-center">
      <Text className="text-blue-500 text-3xl font-bold">{props.title}</Text>
    </View>
  );
};
export default Header;