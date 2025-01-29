import { Link } from "expo-router";
import { Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants';

import "../global.css"
import { ScrollView } from "react-native-gesture-handler";


//use safe area view instead of view when wanting to cover the entire screen
//this is to make sure it works on anrodi and ios

//use scroll view to make the content scrollable
// also the height of our content might me larger than small screens, so this is so these small screen could scroll and it'd be fine      

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">

      <ScrollView contentContainerStyle={{ height: '100%' }}> 
        <View className="w-full items-center h-full px-4">


          <Image
            source={images.logo}
            className="w-[130px] h-[84px]]"
            resizeMode="contain"
          />

          <Image 
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

         
           
        </View>
        
      </ScrollView>
      
    </SafeAreaView>
  );
}
