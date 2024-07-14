import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack>
        <Stack.Screen
        name='index'
        options={{
            headerShown: false
        }} />
        <Stack.Screen
        name='onboarding2'
        options={{
            headerShown: false
        }} />
        <Stack.Screen
        name='onboarding3'
        options={{
            headerShown: false
        }} />
        <Stack.Screen
        name='home'
        options={{
            headerShown: false
        }} />
        <Stack.Screen
        name='profile'
        options={{
            headerShown: false
        }} />
        <Stack.Screen
        name='admin'
        options={{
            headerShown: false
        }} />   
        <Stack.Screen
        name='AddBooks'
        options={{
            headerShown: false
        }} />   
        <Stack.Screen
        name='library'
        options={{
            headerShown: false
        }} /> 

        <Stack.Screen
        name='bookdata'
        options={{
            headerShown: false
        }} />  

    </Stack>
  )
}



export default AuthLayout