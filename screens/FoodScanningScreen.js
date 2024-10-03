import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FoodScanningScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Food Scanning Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default FoodScanningScreen;
