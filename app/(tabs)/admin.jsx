import React, { useState, useEffect } from 'react';
import { View, Button, Alert, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';
import AddBooksButton from '../../components/buttons/AddBooksButton';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
const Admin = () => {
  const [isStorageClear, setIsStorageClear] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  const saveUserData = async () => {
    try {
      await SecureStore.setItemAsync('userData', JSON.stringify({ name: 'John Doe', username: 'johndoe@example.com' }));
      Alert.alert('User Data Saved', 'User data has been saved.');
      loadUserData(); // Refresh user data after saving
    } catch (error) {
      Alert.alert('Error', 'Failed to save user data.');
    }
  };

  const loadUserData = async () => {
    try {
      const userDataString = await SecureStore.getItemAsync('userData');
      if (userDataString) {
        setUserData(JSON.parse(userDataString));
      } else {
        setUserData(null);
        Alert.alert('No User Data', 'No user data found.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch user data.');
    }
  };

  const clearUserData = async () => {
    try {
      await SecureStore.deleteItemAsync('userData');
      setUserData(null);
      Alert.alert('User Data Cleared', 'User data has been cleared.');
    } catch (error) {
      Alert.alert('Error', 'Failed to clear user data.');
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ padding: 20 }}>
        
        <View style={{ marginTop: 20 }}>
          <AddBooksButton handlePress={() => router.push('/AddBooks')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Admin;


