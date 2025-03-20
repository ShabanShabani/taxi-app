import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
}

export default function Button({
  title = "Button",
  onPress,
  variant = "primary",
  isLoading = false,
  disabled = false,
  className = "",
  textClassName = "",
}: ButtonProps) {
  const getButtonStyle = () => {
    if (disabled || isLoading) {
      return "bg-gray-300 border-gray-300";
    }

    switch (variant) {
      case "primary":
        return "bg-blue-500 border-blue-500";
      case "secondary":
        return "bg-gray-800 border-gray-800";
      case "outline":
        return "bg-transparent border-blue-500";
      default:
        return "bg-blue-500 border-blue-500";
    }
  };

  const getTextStyle = () => {
    if (disabled || isLoading) {
      return "text-gray-500";
    }

    switch (variant) {
      case "outline":
        return "text-blue-500";
      default:
        return "text-white";
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      className={`py-3 px-4 rounded-lg border ${getButtonStyle()} ${className}`}
    >
      <View className="flex-row justify-center items-center">
        {isLoading && (
          <ActivityIndicator
            size="small"
            color={variant === "outline" ? "#3B82F6" : "#FFFFFF"}
            className="mr-2"
          />
        )}
        <Text
          className={`font-medium text-center ${getTextStyle()} ${textClassName}`}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
