import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NextButton = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0b2a87', // Example button styling
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NextButton;