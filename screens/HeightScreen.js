import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeightScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Height Conversion Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9e79f',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HeightScreen;
HeightScreen.js
