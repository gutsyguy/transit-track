import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.section}>Name</Text>
      <Text style={styles.section}>Item 2</Text>
      <Text style={styles.section}>Item 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 4,
  },
  section: {
    marginBottom: 4,
    padding: 4,
  },
});

export default Profile;