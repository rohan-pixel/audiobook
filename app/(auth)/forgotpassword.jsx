import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { db } from '../../utils/firebaseConfig'; // Adjust the import path as necessary
import { ref, update, onValue } from 'firebase/database';
import { router } from 'expo-router';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // Function to reset password
  const resetPassword = async () => {
    if (email === '') {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      Alert.alert('Error', 'New passwords do not match');
      return;
    }

    const sanitizedEmail = email.replace(/[.#$[\]]/g, ''); // Remove invalid characters from email
    const userPath = 'users/' + sanitizedEmail;

    try {
      const userDataRef = ref(db, userPath);
      onValue(userDataRef, (snapshot) => {
        if (!snapshot.exists()) {
          Alert.alert('Error', 'User not found');
          return;
        }

        const updates = {};
        updates['password'] = newPassword;

        update(userDataRef, updates);
        Alert.alert('Success', 'Password reset successfully');
        router.push('/login');
      });
    } catch (error) {
      console.error('Error resetting password:', error);
      Alert.alert('Error', 'Failed to reset password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <TextInput
          placeholder='E-Mail ID'
          style={styles.input}
          placeholderTextColor="#FFF"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder='New Password'
          style={styles.input}
          placeholderTextColor="#FFF"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
        <TextInput
          placeholder='Confirm New Password'
          style={styles.input}
          placeholderTextColor="#FFF"
          secureTextEntry
          value={confirmNewPassword}
          onChangeText={(text) => setConfirmNewPassword(text)}
        />
        {/* <Button title='Reset Password' onPress={resetPassword} /> */}
        <TouchableOpacity style={styles.button} onPress={resetPassword}>
            <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#060030',
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#FFF',
  },
  button: {
    backgroundColor: '#0b2a87',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ForgotPassword;