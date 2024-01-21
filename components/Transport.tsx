import React from 'react'
import {
View, 
SafeAreaView,
Text,
Image,
StyleSheet,
FlatList,
} from 'react-native'

const Transport = () => {
    return (
     <View style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.section}>Bus No.</Text>
            <Text style={styles.section}>Time of Arrival</Text>
            <Text style={styles.section}>Arriving Stop</Text>
            <Text style={styles.section}>Next Stop</Text>
        </View>
     </View>
        );
      };
    
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: 4,
        padding: 5,

    },
      
    lib: {
        marginBottom: 4,
        padding: 4,
    },
      
    section: {
         marginBottom: 4,
         padding: 4,
    },
    hero: {
        marginBottom: 4,
        padding: 4,
        fontWeight: 'bold',    
    }
});
      
export default Transport
