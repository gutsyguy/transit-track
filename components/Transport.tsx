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
        <Text style={[styles.section, styles.gridObj]}>Bus No.</Text>
        <Text style={[styles.section, styles.gridObj]}>Time of Arrival</Text>
        <Text style={[styles.section, styles.gridObj]}>Arriving Stop</Text>
        <Text style={[styles.section, styles.gridObj]}>Next Stop</Text>
        </View>
     </View>
        );
      };
    
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        margin: 4,
        padding: 4,
        backgroundColor: 'gray',
    },   
    lib: {
        marginBottom: 4,
        padding: 4,
    },  
    section: {
         marginBottom: 4,
         padding: 4,
         borderRadius: 5,
         fontSize: 8,
    },
    hero: {
        marginBottom: 4,
        padding: 4,
        fontWeight: 'bold',    
    },
    
    rectItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1.5, 
        borderBottomColor: 'black', 
        paddingVertical: 4,
      },
      gridObj: {
        borderRightWidth: 1.5, 
        borderRightColor: 'black', 
      },

});
      
export default Transport
