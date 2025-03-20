import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import ProfileItem from "@/components/ProfileItem";
import Button from "@/components/ui/Button";

export default function ProfileScreen() {
  const handleLogout = () => {
    router.replace("/(auth)/login");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="p-4 border-b border-gray-200">
          <Text className="text-2xl font-bold text-gray-800">Profile</Text>
        </View>

        <View className="p-6 items-center border-b border-gray-200">
          <Image
            source={{
              uri: "https://api.dicebear.com/7.x/avataaars/svg?seed=user",
            }}
            className="w-24 h-24 rounded-full mb-4"
          />

          <Text className="text-xl font-bold text-gray-800">John Doe</Text>
          <Text className="text-gray-500">john.doe@example.com</Text>

          <TouchableOpacity
            className="mt-4 flex-row items-center"
            onPress={() => {}}
          >
            <Text className="text-blue-500 font-medium mr-1">Edit Profile</Text>
            <Feather name="edit-2" size={16} color="#3B82F6" />
          </TouchableOpacity>
        </View>

        <View className="p-4">
          <Text className="text-lg font-bold text-gray-800 mb-2">Account</Text>

          <ProfileItem
            icon="map-pin"
            title="Saved Addresses"
            subtitle="Home, Work"
            onPress={() => {}}
          />

          <ProfileItem
            icon="credit-card"
            title="Payment Methods"
            subtitle="Visa •••• 4242"
            onPress={() => {}}
          />

          <ProfileItem
            icon="bell"
            title="Notifications"
            onPress={() => {}}
            showBadge
          />

          <ProfileItem
            icon="shield"
            title="Privacy & Security"
            onPress={() => {}}
          />

          <Text className="text-lg font-bold text-gray-800 mt-6 mb-2">
            Support
          </Text>

          <ProfileItem
            icon="help-circle"
            title="Help Center"
            onPress={() => {}}
          />

          <ProfileItem
            icon="message-square"
            title="Contact Us"
            onPress={() => {}}
          />

          <ProfileItem
            icon="file-text"
            title="Terms & Conditions"
            onPress={() => {}}
          />

          <View className="mt-8 mb-4">
            <Button title="Log Out" onPress={handleLogout} variant="outline" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
