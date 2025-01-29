//we put the name auth in brackets to tell the router that this is a route group
//basically we can add pages in the auth folder and they will have a different layout

//We create a seperate kayout for auth bc our sign up and sing in pages dont have the typical layout of all our other screens

import { View, Text } from 'react-native'
import React from 'react'

const AuthLayout = () => {
  return (
    <View>
      <Text>AuthLayout</Text>
    </View>
  )
}

export default AuthLayout