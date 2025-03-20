import { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { router } from "expo-router";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    setIsLoading(true);
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      router.replace("/(tabs)");
    }, 1500);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-6 justify-center min-h-screen">
        <View className="items-center mb-10">
          <Image
            source={require("@/assets/images/icon.png")}
            className="w-20 h-20 mb-4"
          />
          <Text className="text-3xl font-bold text-gray-800">
            Create Account
          </Text>
          <Text className="text-gray-500 mt-2">Sign up to get started</Text>
        </View>

        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
          icon="user"
          autoCapitalize="words"
        />

        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          icon="mail"
        />

        <Input
          label="Password"
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          icon="lock"
        />

        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          icon="lock"
        />

        <Button
          title="Sign Up"
          onPress={handleRegister}
          isLoading={isLoading}
          className="my-6"
        />

        <View className="flex-row justify-center">
          <Text className="text-gray-600">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text className="text-blue-500 font-medium">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
