import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MapProps {
  showDriverLocation?: boolean;
  showDestination?: boolean;
  className?: string;
}

export default function Map({
  showDriverLocation = false,
  showDestination = false,
  className = "",
}: MapProps) {
  // This is a placeholder for a real map implementation
  // In a real app, you would use something like react-native-maps

  return (
    <View className={`bg-gray-200 rounded-lg overflow-hidden ${className}`}>
      <View className="absolute inset-0 flex items-center justify-center">
        <Text className="text-gray-500 font-medium">Map View</Text>
        {showDriverLocation && (
          <Text className="text-gray-500 mt-2">Driver location visible</Text>
        )}
        {showDestination && (
          <Text className="text-gray-500 mt-2">Destination visible</Text>
        )}
      </View>
    </View>
  );
}
