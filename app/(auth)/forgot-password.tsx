import { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { router } from "expo-router";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleResetPassword = () => {
    setIsLoading(true);
    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 p-6 justify-center min-h-screen">
        <TouchableOpacity
          className="absolute top-12 left-4 z-10"
          onPress={() => router.back()}
        >
          <View className="p-2">
            <Text className="text-blue-500 font-medium">← Back</Text>
          </View>
        </TouchableOpacity>

        <View className="items-center mb-10">
          <Image
            source={require("@/assets/images/icon.png")}
            className="w-20 h-20 mb-4"
          />
          <Text className="text-3xl font-bold text-gray-800">
            Reset Password
          </Text>
          <Text className="text-gray-500 mt-2 text-center">
            {isSent
              ? "Check your email for reset instructions"
              : "Enter your email and we'll send you instructions to reset your password"}
          </Text>
        </View>

        {!isSent ? (
          <>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              icon="mail"
            />

            <Button
              title="Send Reset Link"
              onPress={handleResetPassword}
              isLoading={isLoading}
              className="my-6"
            />
          </>
        ) : (
          <>
            <View className="items-center my-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <Text className="text-green-700">
                Reset link sent successfully!
              </Text>
            </View>

            <Button
              title="Back to Login"
              onPress={() => router.push("/(auth)/login")}
              className="my-6"
            />

            <TouchableOpacity
              className="items-center"
              onPress={handleResetPassword}
            >
              <Text className="text-blue-500 font-medium">Resend Link</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
}
