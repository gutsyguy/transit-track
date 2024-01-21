import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.section}>*Insert Name Here*</Text>
      <Text style={styles.section}>* Insert Email Here*</Text>
      <Text style={styles.section}>Item 3</Text>
      <Text style={styles.section}>Item 4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    justifyContent: 'center',


  },
  section: {
    marginBottom: 4,
    padding: 4,
    fontSize: 20,
    fontWeight: 'bold',
    
  },

});

export default Profile;

