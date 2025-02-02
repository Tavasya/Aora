//Order to structure this page
// 1. Set background color with SafeAreaView becasue this makes it safe on all screens
// 2. Then set the scrollView so users could scroll
// 3. Then finally set your regular View to structure your page

//min-h-[85vh] will actually center your view


// 4. After finished stlying, make a form field in your components folder and import it here

//5. Now set up the form with useState.
// What useState does is that it allows you to set the state of the form
// For exampel, if you have a form with email and password, you can set the state of the form to email and password


//6. Now set up the form field with the title, value, handleChangeText, and otherStyles and pass the props to the FormField component

import { Text, View, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { Link, router } from 'expo-router'
import FormField from '../../componenets/FormField';
import CustomButton from '@/componenets/CustomButton';
import images from '../../constants/images';

import { signIn } from '@/lib/appwrite';
import { useGlobalContext } from '@/context/GlobalProvider';

const SignIn = () => {
  const{ setUser, setIsLogged } = useGlobalContext();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if(!form.email || !form.password) {
      Alert.alert('Error', 'Please fill all fields');
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);


      //set it to globnal state later
      setUser(result);
      setIsLogged(true);

      router.replace('/home');
    } catch (error) {
      Alert.alert('Error',error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white font-semibold mt-10">Log in to Aora</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
        
          />

          <CustomButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have an account?
            </Text>
            <Link href='/sign-up' className='text-lg font-psemibold text-secondary'>Sign Up</Link>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;