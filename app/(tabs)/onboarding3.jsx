import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import LetsGetStarted from '../../components/buttons/LetsGetStarted';


const onboarding3 = () => {
  return (
    <ImageBackground source={require('../../assets/images/bg.jpeg')} style={styles.background}>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.onboardingBold}>Personalize Your Experience</Text>
        <Text style={styles.onboardingNormal}>
        Tailor  your preferences and interests. Choose your favorite genres, speakers, and topics to create a personalized listening experience.
        </Text>
        <View style={styles.nextAndSkipButtons}>
          <LetsGetStarted handlePress={() => router.push('/register')} /> 
        </View>
      </View>
    </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'contain', 
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  onboardingBold: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10, 
  },
  onboardingNormal: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20, 
  },
  nextAndSkipButtons:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  }
  });
  

export default onboarding3