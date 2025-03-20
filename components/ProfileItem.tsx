import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface ProfileItemProps {
  icon: keyof typeof Feather.glyphMap;
  title: string;
  subtitle?: string;
  onPress: () => void;
  showBadge?: boolean;
}

export default function ProfileItem({
  icon,
  title,
  subtitle,
  onPress,
  showBadge = false,
}: ProfileItemProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center py-4 border-b border-gray-100"
      onPress={onPress}
    >
      <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-4">
        <Feather name={icon} size={20} color="#4B5563" />
      </View>

      <View className="flex-1">
        <Text className="font-medium text-gray-800">{title}</Text>
        {subtitle && <Text className="text-gray-500 text-sm">{subtitle}</Text>}
      </View>

      <View className="flex-row items-center">
        {showBadge && <View className="w-2 h-2 rounded-full bg-red-500 mr-2" />}
        <Feather name="chevron-right" size={20} color="#9CA3AF" />
      </View>
    </TouchableOpacity>
  );
}
