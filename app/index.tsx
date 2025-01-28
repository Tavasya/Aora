import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Edit app/index.tsx to edit this screen.</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style ={{ color: 'blue'}}>Go to Profile</Link>
    </View>
  );
}
