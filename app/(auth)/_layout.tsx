//we put the name auth in brackets to tell the router that this is a route group
//basically we can add pages in the auth folder and they will have a different layout

//We create a seperate kayout for auth bc our sign up and sing in pages dont have the typical layout of all our other screens

import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

//For status bar theres 2, use the one from expo-status-bar 

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="sign-in"
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="sign-up"
          options={{
            headerShown: false
          }}
        />
        
      </Stack>

      <StatusBar backgroundColor="#16122" style="light" />
    </>
  )
}

export default AuthLayout