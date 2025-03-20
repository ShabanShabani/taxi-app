import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import Map from "@/components/Map";
import LocationInput from "@/components/LocationInput";
import RideOption from "@/components/RideOption";
import Button from "@/components/ui/Button";

export default function HomeScreen() {
  const [pickupLocation, setPickupLocation] = useState("Current Location");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [showRideOptions, setShowRideOptions] = useState(false);
  const [selectedRideType, setSelectedRideType] = useState(0);

  const rideOptions = [
    { id: 0, title: "Economy", price: "$10-12", duration: "5 min" },
    { id: 1, title: "Comfort", price: "$15-18", duration: "5 min" },
    { id: 2, title: "Premium", price: "$22-25", duration: "5 min" },
  ];

  const handleDestinationSelect = () => {
    // In a real app, this would open a location search screen
    setDestinationLocation("123 Main Street");
    setShowRideOptions(true);
  };

  const handleOrderTaxi = () => {
    router.push("/ride/tracking");
  };

  return (
    <View className="flex-1 bg-white">
      <Map className="w-full h-full absolute" />

      <SafeAreaView className="flex-1">
        <View className="p-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-2xl font-bold text-gray-800">
              Book a Ride
            </Text>

            <TouchableOpacity
              className="w-10 h-10 rounded-full bg-white shadow-sm items-center justify-center"
              onPress={() => {}}
            >
              <Feather name="menu" size={22} color="#1F2937" />
            </TouchableOpacity>
          </View>

          <LocationInput
            pickupLocation={pickupLocation}
            destinationLocation={destinationLocation}
            onPickupPress={() => {}}
            onDestinationPress={handleDestinationSelect}
            className="mb-4"
          />
        </View>

        {showRideOptions && (
          <View className="bg-white rounded-t-3xl shadow-lg p-5 mt-auto">
            <Text className="text-lg font-bold text-gray-800 mb-4">
              Choose your ride
            </Text>

            <ScrollView className="mb-4">
              {rideOptions.map((option) => (
                <RideOption
                  key={option.id}
                  title={option.title}
                  price={option.price}
                  duration={option.duration}
                  selected={selectedRideType === option.id}
                  onSelect={() => setSelectedRideType(option.id)}
                />
              ))}
            </ScrollView>

            <Button title="Order Taxi" onPress={handleOrderTaxi} />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
