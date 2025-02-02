import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import GlobalProvider from '../context/GlobalProvider'

SplashScreen.preventAutoHideAsync();
//This function prevents the splash screen from hiding automatically


import "../global.css"

const RootLayout = () => {
  


  //You have to load your fonts here in layout
  //You can also load your fonts in the component where you are using it
  //But it is better to load it in layout so that it is available to all components
  //You can also use a custom hook to load fonts
  //font name: require("path to font file")
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });


  //Hide splash screen when fonts are loaded
  //Splash screen means the screen that shows when the app is loading
  //We hide it when the app is ready to be displayed
  //the Async function is used to make the function asynchronous
  //We use useEffect to run the function when the fonts are loaded
  //useEffect is a hook that runs a function when a component is mounted

  //So the order is we we check if fonts are loaded, then we hide the splash screen, then we check for error
  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])
  //A dependcy array makes sure that the function runs only when the value of the variable in the array changes
  //so if fonts loaded changes or error changes, the function will run

  if(!fontsLoaded && !error) return null;
  //if fonts havent loaded and there is no error, return null bc something prob went wrong


  return (

    <GlobalProvider>

      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/*<Stack.Screen name="/search/[query]" options={{ headerShown: false }} />*/}
            
          </Stack>
        </SafeAreaProvider>
      </GestureHandlerRootView>

    </GlobalProvider>

  )
}

export default RootLayout


