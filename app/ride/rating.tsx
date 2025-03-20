import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import Button from "@/components/ui/Button";

export default function RatingScreen() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      router.replace("/(tabs)");
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 border-b border-gray-200 flex-row items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-800 ml-4">
          Rate Your Ride
        </Text>
      </View>

      <View className="flex-1 p-6 items-center">
        <Image
          source={{
            uri: "https://api.dicebear.com/7.x/avataaars/svg?seed=driver",
          }}
          className="w-24 h-24 rounded-full mb-4"
        />

        <Text className="text-xl font-bold text-gray-800">Michael Driver</Text>
        <Text className="text-gray-500 mb-8">Toyota Camry • ABC 123</Text>

        <Text className="text-lg font-medium text-gray-800 mb-4">
          How was your ride?
        </Text>

        <View className="flex-row mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity
              key={star}
              onPress={() => setRating(star)}
              className="mx-2"
            >
              <Feather
                name={star <= rating ? "star" : "star"}
                size={36}
                color={star <= rating ? "#F59E0B" : "#D1D5DB"}
                solid={star <= rating}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View className="w-full mb-8">
          <Text className="text-gray-700 mb-2 font-medium">
            Additional comments
          </Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4 h-32 bg-gray-50 text-gray-800"
            placeholder="Tell us about your experience"
            multiline
            value={comment}
            onChangeText={setComment}
          />
        </View>

        <Button
          title="Submit Rating"
          onPress={handleSubmit}
          isLoading={isSubmitting}
          className="w-full"
        />
      </View>
    </SafeAreaView>
  );
}
