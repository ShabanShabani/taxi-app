import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface DriverInfoProps {
  name?: string;
  rating?: number;
  carModel?: string;
  licensePlate?: string;
  avatar?: any;
  onCall?: () => void;
  onMessage?: () => void;
  className?: string;
}

export default function DriverInfo({
  name = "John Driver",
  rating = 4.8,
  carModel = "Toyota Camry",
  licensePlate = "ABC 123",
  avatar,
  onCall = () => {},
  onMessage = () => {},
  className = "",
}: DriverInfoProps) {
  return (
    <View className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <View className="flex-row items-center mb-3">
        <Image
          source={
            avatar || {
              uri: "https://api.dicebear.com/7.x/avataaars/svg?seed=driver",
            }
          }
          className="w-14 h-14 rounded-full mr-3"
        />

        <View className="flex-1">
          <Text className="font-medium text-lg text-gray-800">{name}</Text>
          <View className="flex-row items-center">
            <Feather name="star" size={16} color="#F59E0B" />
            <Text className="text-gray-600 ml-1">{rating}</Text>
          </View>
        </View>

        <View className="flex-row">
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center mr-2"
            onPress={onMessage}
          >
            <Feather name="message-circle" size={20} color="#3B82F6" />
          </TouchableOpacity>

          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-green-100 items-center justify-center"
            onPress={onCall}
          >
            <Feather name="phone" size={20} color="#10B981" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row items-center p-3 bg-gray-50 rounded-lg">
        <Feather name="truck" size={18} color="#6B7280" />
        <Text className="ml-2 text-gray-700">{carModel}</Text>
        <View className="flex-1" />
        <Text className="font-medium text-gray-800">{licensePlate}</Text>
      </View>
    </View>
  );
}
