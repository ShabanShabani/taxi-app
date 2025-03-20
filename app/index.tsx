import { useEffect } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  useEffect(() => {
    // Redirect to auth screen
    router.replace("/(auth)/login");
  }, []);

  return (
    <View className="w-full h-full items-center justify-center bg-white">
      <Text className="text-gray-500">Loading...</Text>
    </View>
  );
}
