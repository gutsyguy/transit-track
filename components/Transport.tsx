import React from 'react'
import {
View, 
SafeAreaView,
Text,
Image,
StyleSheet
} from 'react-native'

const Navbar = () => {   
 return(
    <View>
        <Image
            source={require('@transit-track/assets/browse.svg')}
        />
        <Image
     
            source={require('@transit-track/assets/profile.svg')}
        />
</View>

 )  
}

export default Navbar
