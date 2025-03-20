import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import Map from "@/components/Map";
import DriverInfo from "@/components/DriverInfo";

export default function TrackingScreen() {
  const [rideStatus, setRideStatus] = useState("searching"); // searching, arriving, onride, completed
  const [estimatedTime, setEstimatedTime] = useState(5);

  useEffect(() => {
    // Simulate ride progress
    const timer = setTimeout(() => {
      if (rideStatus === "searching") {
        setRideStatus("arriving");
      } else if (rideStatus === "arriving" && estimatedTime > 1) {
        setEstimatedTime((prev) => prev - 1);
      } else if (rideStatus === "arriving" && estimatedTime <= 1) {
        setRideStatus("onride");
        setEstimatedTime(15);
      } else if (rideStatus === "onride" && estimatedTime > 1) {
        setEstimatedTime((prev) => prev - 1);
      } else if (rideStatus === "onride" && estimatedTime <= 1) {
        setRideStatus("completed");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [rideStatus, estimatedTime]);

  const getStatusText = () => {
    switch (rideStatus) {
      case "searching":
        return "Finding your driver...";
      case "arriving":
        return `Driver arriving in ${estimatedTime} min`;
      case "onride":
        return `${estimatedTime} min to destination`;
      case "completed":
        return "Ride completed";
      default:
        return "";
    }
  };

  const handleCancel = () => {
    router.back();
  };

  const handleComplete = () => {
    router.replace("/ride/rating");
  };

  return (
    <View className="flex-1 bg-white">
      <Map
        className="w-full h-full absolute"
        showDriverLocation={rideStatus !== "searching"}
        showDestination={true}
      />

      <SafeAreaView className="flex-1">
        <View className="p-4">
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-white shadow-sm items-center justify-center mb-4"
            onPress={() => router.back()}
          >
            <Feather name="arrow-left" size={22} color="#1F2937" />
          </TouchableOpacity>

          <View className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-lg font-bold text-gray-800">
                {getStatusText()}
              </Text>
              {rideStatus === "searching" && (
                <View className="flex-row items-center">
                  <View className="w-3 h-3 rounded-full bg-blue-500 mr-2 animate-pulse" />
                  <Text className="text-blue-500">Searching</Text>
                </View>
              )}
            </View>

            {rideStatus === "searching" ? (
              <TouchableOpacity
                className="mt-2 py-2 items-center border border-red-500 rounded-lg"
                onPress={handleCancel}
              >
                <Text className="text-red-500 font-medium">Cancel</Text>
              </TouchableOpacity>
            ) : rideStatus === "completed" ? (
              <TouchableOpacity
                className="mt-2 py-2 items-center bg-blue-500 rounded-lg"
                onPress={handleComplete}
              >
                <Text className="text-white font-medium">Rate & Complete</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>

        {rideStatus !== "searching" && rideStatus !== "completed" && (
          <View className="mt-auto">
            <DriverInfo
              name="Michael Driver"
              rating={4.8}
              carModel="Toyota Camry"
              licensePlate="ABC 123"
              className="m-4"
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
