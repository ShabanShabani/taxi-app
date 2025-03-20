import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  icon?: keyof typeof Feather.glyphMap;
  error?: string;
  onIconPress?: () => void;
  className?: string;
}

export default function Input({
  label,
  placeholder = "Enter text",
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  icon,
  error,
  onIconPress,
  className = "",
}: InputProps) {
  return (
    <View className={`mb-4 ${className}`}>
      {label && <Text className="text-gray-700 mb-2 font-medium">{label}</Text>}

      <View
        className={`flex-row items-center border rounded-lg px-4 py-3 bg-gray-50 ${error ? "border-red-500" : "border-gray-300"}`}
      >
        {icon && (
          <TouchableOpacity onPress={onIconPress} disabled={!onIconPress}>
            <Feather name={icon} size={20} color="#6B7280" />
          </TouchableOpacity>
        )}

        <TextInput
          className="flex-1 ml-2 text-gray-800"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
      </View>

      {error && <Text className="text-red-500 mt-1 text-sm">{error}</Text>}
    </View>
  );
}
