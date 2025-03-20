import { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { router } from "expo-router";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      router.replace("/(tabs)");
    }, 1500);
  };

  const handleSocialLogin = (platform: string) => {
    setIsLoading(true);
    // Simulate social login
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
          <Text className="text-3xl font-bold text-gray-800">Welcome Back</Text>
          <Text className="text-gray-500 mt-2">Sign in to continue</Text>
        </View>

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
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          icon="lock"
        />

        <TouchableOpacity
          className="items-end mb-6"
          onPress={() => router.push("/(auth)/forgot-password")}
        >
          <Text className="text-blue-500 font-medium">Forgot Password?</Text>
        </TouchableOpacity>

        <Button
          title="Sign In"
          onPress={handleLogin}
          isLoading={isLoading}
          className="mb-6"
        />

        <View className="flex-row items-center my-6">
          <View className="flex-1 h-[1px] bg-gray-300" />
          <Text className="mx-4 text-gray-500">Or continue with</Text>
          <View className="flex-1 h-[1px] bg-gray-300" />
        </View>

        <View className="flex-row justify-between mb-8">
          <TouchableOpacity
            className="flex-1 mr-2 border border-gray-300 rounded-lg py-3 items-center"
            onPress={() => handleSocialLogin("google")}
          >
            <Text className="text-gray-700 font-medium">Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 ml-2 border border-gray-300 rounded-lg py-3 items-center"
            onPress={() => handleSocialLogin("facebook")}
          >
            <Text className="text-gray-700 font-medium">Facebook</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
            <Text className="text-blue-500 font-medium">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
