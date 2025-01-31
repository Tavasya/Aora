import { TouchableOpacity, Text} from 'react-native'
import React from 'react'


//We use touchable opacity  because it is a button that can be pressed and it has a touchable effect
// We are using tocuhanle opacity and not a button componenet because we want to have a touchable effect on the button

//For the button, we give it its styles, then if its loading, we out the opacity to -50, and we disable the buttom and its loading as well


//The way to make a funcitonal button is to pass in the title, the handlePress function, the containerStyles, the textStyles and the isLoading.
//Then put your styles and information here
const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
        >
            <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
  )
}

export default CustomButton