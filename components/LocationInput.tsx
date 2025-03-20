import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface LocationInputProps {
  pickupLocation?: string;
  destinationLocation?: string;
  onPickupPress?: () => void;
  onDestinationPress?: () => void;
  className?: string;
}

export default function LocationInput({
  pickupLocation = "",
  destinationLocation = "",
  onPickupPress = () => {},
  onDestinationPress = () => {},
  className = "",
}: LocationInputProps) {
  return (
    <View className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {/* Pickup location */}
      <TouchableOpacity
        className="flex-row items-center mb-4"
        onPress={onPickupPress}
      >
        <View className="w-8 h-8 rounded-full bg-blue-100 items-center justify-center mr-3">
          <View className="w-3 h-3 rounded-full bg-blue-500" />
        </View>

        <View className="flex-1 border-b border-gray-200 pb-3">
          <Text className="text-gray-500 text-sm mb-1">PICKUP</Text>
          <Text className="text-gray-800">
            {pickupLocation || "Select pickup location"}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Destination location */}
      <TouchableOpacity
        className="flex-row items-center"
        onPress={onDestinationPress}
      >
        <View className="w-8 h-8 rounded-full bg-red-100 items-center justify-center mr-3">
          <View className="w-3 h-3 rounded-full bg-red-500" />
        </View>

        <View className="flex-1">
          <Text className="text-gray-500 text-sm mb-1">DESTINATION</Text>
          <Text className="text-gray-800">
            {destinationLocation || "Where to?"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
