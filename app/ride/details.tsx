import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";
import Map from "@/components/Map";
import Button from "@/components/ui/Button";

export default function RideDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // In a real app, you would fetch ride details based on the ID
  const rideDetails = {
    date: "June 15, 2023",
    time: "18:45",
    pickup: "123 Home Street, City",
    destination: "456 Office Avenue, City",
    distance: "5.2 km",
    duration: "15 min",
    price: "$15.75",
    paymentMethod: "Visa •••• 4242",
    status: "completed",
    driver: {
      name: "Michael Driver",
      rating: 4.8,
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=driver",
    },
  };

  const getStatusColor = () => {
    switch (rideDetails.status) {
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
    switch (rideDetails.status) {
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
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 border-b border-gray-200 flex-row items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-800 ml-4">
          Ride Details
        </Text>
      </View>

      <ScrollView>
        <Map className="w-full h-40" showDestination={true} />

        <View className="p-4">
          <View className="flex-row justify-between items-center mb-4">
            <View>
              <Text className="text-lg font-bold text-gray-800">
                {rideDetails.date}
              </Text>
              <Text className="text-gray-500">{rideDetails.time}</Text>
            </View>

            <View className={`px-3 py-1 rounded-full ${getStatusColor()}`}>
              <Text className="font-medium">{getStatusText()}</Text>
            </View>
          </View>

          <View className="bg-gray-50 rounded-lg p-4 mb-6">
            <View className="flex-row mb-4">
              <View className="w-8 items-center mr-2">
                <View className="w-3 h-3 rounded-full bg-blue-500" />
                <View className="h-12 w-0.5 bg-gray-300 my-1" />
                <View className="w-3 h-3 rounded-full bg-red-500" />
              </View>

              <View className="flex-1">
                <View className="mb-4">
                  <Text className="text-gray-500 text-sm">PICKUP</Text>
                  <Text className="text-gray-800">{rideDetails.pickup}</Text>
                </View>

                <View>
                  <Text className="text-gray-500 text-sm">DESTINATION</Text>
                  <Text className="text-gray-800">
                    {rideDetails.destination}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between mb-6">
            <View className="items-center">
              <Text className="text-gray-500 text-sm">DISTANCE</Text>
              <Text className="text-gray-800 font-medium">
                {rideDetails.distance}
              </Text>
            </View>

            <View className="items-center">
              <Text className="text-gray-500 text-sm">DURATION</Text>
              <Text className="text-gray-800 font-medium">
                {rideDetails.duration}
              </Text>
            </View>

            <View className="items-center">
              <Text className="text-gray-500 text-sm">PRICE</Text>
              <Text className="text-gray-800 font-medium">
                {rideDetails.price}
              </Text>
            </View>
          </View>

          <View className="bg-gray-50 rounded-lg p-4 mb-6">
            <Text className="text-gray-800 font-medium mb-2">
              Payment Method
            </Text>
            <View className="flex-row items-center">
              <Feather name="credit-card" size={20} color="#4B5563" />
              <Text className="text-gray-700 ml-2">
                {rideDetails.paymentMethod}
              </Text>
            </View>
          </View>

          <View className="bg-gray-50 rounded-lg p-4 mb-6">
            <Text className="text-gray-800 font-medium mb-2">Driver</Text>
            <View className="flex-row items-center">
              <Image
                source={{ uri: rideDetails.driver.photo }}
                className="w-12 h-12 rounded-full mr-3"
              />

              <View>
                <Text className="text-gray-800">{rideDetails.driver.name}</Text>
                <View className="flex-row items-center">
                  <Feather name="star" size={14} color="#F59E0B" />
                  <Text className="text-gray-600 ml-1">
                    {rideDetails.driver.rating}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <Button
            title="Book Similar Ride"
            onPress={() => router.push("/(tabs)")}
            className="mb-6"
          />

          {rideDetails.status === "completed" && (
            <TouchableOpacity className="items-center mb-6" onPress={() => {}}>
              <Text className="text-blue-500 font-medium">
                Download Receipt
              </Text>
            </TouchableOpacity>
          )}

          {rideDetails.status === "completed" && (
            <TouchableOpacity className="items-center mb-6" onPress={() => {}}>
              <Text className="text-gray-500">Report an Issue</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
