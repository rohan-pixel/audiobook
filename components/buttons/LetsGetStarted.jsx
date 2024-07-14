import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const LetsGetStarted = ({handlePress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Let's Get Started</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0b2a87', 
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

export default LetsGetStarted