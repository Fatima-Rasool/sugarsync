import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BMIScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BMI Calculator Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d2b4de',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default BMIScreen;
