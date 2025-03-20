import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface RideOptionProps {
  title: string;
  price: string;
  duration: string;
  image?: any;
  selected?: boolean;
  onSelect: () => void;
}

export default function RideOption({
  title = "Standard",
  price = "$10-12",
  duration = "5 min",
  image,
  selected = false,
  onSelect,
}: RideOptionProps) {
  return (
    <TouchableOpacity
      className={`flex-row items-center p-4 rounded-lg mb-3 ${selected ? "bg-blue-50 border border-blue-200" : "bg-white border border-gray-200"}`}
      onPress={onSelect}
    >
      <Image
        source={image || require("@/assets/images/icon.png")}
        className="w-12 h-12 mr-4"
      />

      <View className="flex-1">
        <Text className="font-medium text-gray-800">{title}</Text>
        <Text className="text-gray-500 text-sm">{duration} away</Text>
      </View>

      <View className="items-end">
        <Text className="font-medium text-gray-800">{price}</Text>
      </View>
    </TouchableOpacity>
  );
}
