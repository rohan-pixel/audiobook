import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { db } from '../../utils/firebaseConfig'; // Adjust the import path as necessary
import { ref, get } from 'firebase/database';
import ForgotButton from '../../components/buttons/ForgotButton'
import { router } from 'expo-router';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to validate login credentials
  const loginData = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    if (email === 'hello.bnrtechnologies@gmail.com' && password === 'hindufm@mahadev') {
      router.push('/AddBooks');
      return;
    }

    const sanitizedEmail = email.replace(/[.#$[\]]/g, ''); // Remove invalid characters from email
    const userPath = 'users/' + sanitizedEmail;

    try {
      const userDataRef = ref(db, userPath);
      const userData = await get(userDataRef);

      if (!userData.exists()) {
        Alert.alert('Error', 'User not found');
        return;
      }

      const storedPassword = userData.val().password;
      if (password!== storedPassword) {
        Alert.alert('Error', 'Incorrect password');
        return;
      }

      // Login successful, navigate to protected route
      router.push('/home');
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Failed to log in');
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
          placeholder='Password'
          style={styles.input}
          placeholderTextColor="#FFF"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {/* <Button title='Login' onPress={loginData} /> */}
        <TouchableOpacity style={styles.button} onPress={loginData}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <ForgotButton handlePress={() => router.push('/forgotpassword')}/>
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

export default login;