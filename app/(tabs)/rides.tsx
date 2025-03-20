import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import RideHistoryItem from "@/components/RideHistoryItem";

export default function RidesScreen() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingRides = [
    {
      id: "u1",
      date: "Today",
      time: "14:30",
      pickup: "Home",
      destination: "Office",
      price: "$12.50",
      status: "ongoing",
    },
  ];

  const pastRides = [
    {
      id: "p1",
      date: "Yesterday",
      time: "18:45",
      pickup: "Office",
      destination: "Home",
      price: "$15.75",
      status: "completed",
    },
    {
      id: "p2",
      date: "Jun 15, 2023",
      time: "09:30",
      pickup: "Home",
      destination: "Airport",
      price: "$32.00",
      status: "completed",
    },
    {
      id: "p3",
      date: "Jun 10, 2023",
      time: "20:15",
      pickup: "Restaurant",
      destination: "Home",
      price: "$18.25",
      status: "cancelled",
    },
    {
      id: "p4",
      date: "Jun 5, 2023",
      time: "13:20",
      pickup: "Home",
      destination: "Shopping Mall",
      price: "$10.50",
      status: "completed",
    },
  ];

  const handleRidePress = (rideId: string) => {
    router.push(`/ride/details?id=${rideId}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">My Rides</Text>
      </View>

      <View className="flex-row border-b border-gray-200">
        <TouchableOpacity
          className={`flex-1 py-4 ${activeTab === "upcoming" ? "border-b-2 border-blue-500" : ""}`}
          onPress={() => setActiveTab("upcoming")}
        >
          <Text
            className={`text-center font-medium ${activeTab === "upcoming" ? "text-blue-500" : "text-gray-500"}`}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-1 py-4 ${activeTab === "past" ? "border-b-2 border-blue-500" : ""}`}
          onPress={() => setActiveTab("past")}
        >
          <Text
            className={`text-center font-medium ${activeTab === "past" ? "text-blue-500" : "text-gray-500"}`}
          >
            Past
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === "upcoming" && upcomingRides.length === 0 ? (
        <View className="flex-1 items-center justify-center p-6">
          <Feather name="calendar" size={60} color="#D1D5DB" />
          <Text className="text-lg font-medium text-gray-800 mt-4">
            No upcoming rides
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            You don't have any scheduled rides. Book a ride now!
          </Text>
          <TouchableOpacity
            className="mt-6 bg-blue-500 py-3 px-6 rounded-lg"
            onPress={() => router.push("/")}
          >
            <Text className="text-white font-medium">Book a Ride</Text>
          </TouchableOpacity>
        </View>
      ) : activeTab === "upcoming" ? (
        <FlatList
          data={upcomingRides}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <RideHistoryItem
              date={item.date}
              time={item.time}
              pickup={item.pickup}
              destination={item.destination}
              price={item.price}
              status={item.status as "completed" | "cancelled" | "ongoing"}
              onPress={() => handleRidePress(item.id)}
            />
          )}
        />
      ) : (
        <FlatList
          data={pastRides}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <RideHistoryItem
              date={item.date}
              time={item.time}
              pickup={item.pickup}
              destination={item.destination}
              price={item.price}
              status={item.status as "completed" | "cancelled" | "ongoing"}
              onPress={() => handleRidePress(item.id)}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}
