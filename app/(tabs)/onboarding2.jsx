import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';
import NextButton from '@/components/buttons/NextButton';
import Skip from '@/components/buttons/SkipButton';


const onboarding2 = () => {
  return (
    <ImageBackground source={require('../../assets/images/bg.jpeg')} style={styles.background}>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.onboardingBold}>Explore Diverse Content</Text>
        <Text style={styles.onboardingNormal}>
        Dive into our extensive library of audio content, meticulously curated to cater to your learning mindset needs and interests.
        </Text>
        <View style={styles.nextAndSkipButtons}>
          <Skip handlePress={() => router.push('/register') } />
          <NextButton handlePress={() => router.push('/onboarding3')} /> 
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


export default onboarding2