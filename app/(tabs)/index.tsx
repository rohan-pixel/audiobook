import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Redirect, router } from 'expo-router';
import NextButton from '@/components/buttons/NextButton';
import Skip from '@/components/buttons/SkipButton';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <ImageBackground source={require('../../assets/images/bg.jpeg')} style={styles.background}>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      
        <Text style={styles.onboardingBold}>Welcome To Hindu FM</Text>
        <Text style={styles.onboardingNormal}>
          Your gateway to a world of knowledge enlightenment and learning mindset. Dive into a vast ocean of audio content that will nourish and expand your mind.
        </Text>
        <View style={styles.nextAndSkipButtons}>
          <Skip handlePress={() => router.push('/register') } />
          <NextButton handlePress={() => router.push('/onboarding2')} /> 
        </View>
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
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
  },
});

