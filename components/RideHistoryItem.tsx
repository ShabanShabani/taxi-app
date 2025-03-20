import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface RideHistoryItemProps {
  date: string;
  time: string;
  pickup: string;
  destination: string;
  price: string;
  status: "completed" | "cancelled" | "ongoing";
  onPress: () => void;
}

export default function RideHistoryItem({
  date = "Today",
  time = "10:30 AM",
  pickup = "Current Location",
  destination = "Destination",
  price = "$15.50",
  status = "completed",
  onPress,
}: RideHistoryItemProps) {
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "cancelled":
        return "text-red-600 bg-red-50";
      case "ongoing":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
      case "ongoing":
        return "Ongoing";
      default:
        return "Unknown";
    }
  };

  return (
    <TouchableOpacity
      className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-100"
      onPress={onPress}
    >
      <View className="flex-row justify-between items-center mb-3">
        <View className="flex-row items-center">
          <Text className="font-medium text-gray-800">{date}</Text>
          <Text className="text-gray-500 ml-2">{time}</Text>
        </View>

        <View className={`px-2 py-1 rounded-full ${getStatusColor()}`}>
          <Text className="text-xs font-medium">{getStatusText()}</Text>
        </View>
      </View>

      <View className="flex-row mb-1">
        <View className="w-6 items-center mr-2">
          <View className="w-2 h-2 rounded-full bg-blue-500" />
        </View>
        <Text className="text-gray-700 flex-1" numberOfLines={1}>
          {pickup}
        </Text>
      </View>

      <View className="flex-row items-center mb-3">
        <View className="w-6 items-center mr-2">
          <View className="w-2 h-2 rounded-full bg-red-500" />
        </View>
        <Text className="text-gray-700 flex-1" numberOfLines={1}>
          {destination}
        </Text>
      </View>

      <View className="flex-row justify-between items-center pt-2 border-t border-gray-100">
        <Text className="font-medium text-gray-800">{price}</Text>
        <Feather name="chevron-right" size={20} color="#9CA3AF" />
      </View>
    </TouchableOpacity>
  );
}
