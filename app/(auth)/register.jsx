import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Button } from 'react-native';
import { db } from '../../utils/firebaseConfig'; // Adjust the import path as necessary
import { ref, set } from 'firebase/database';
import LoginButton from '../../components/buttons/LoginButton'
import { router } from 'expo-router';
import RegisterButton from '../../components/buttons/RegisterButton';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to add data to Firebase Realtime Database
  const registerData = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      name: name,
      email: email,
      password: password,
    };

    // Construct a sanitized path using the email address (sanitize as per your validation rules)
    const sanitizedEmail = email.replace(/[.#$[\]]/g, ''); // Remove invalid characters from email
    const userPath = 'users/' + sanitizedEmail;

    try {
      set(ref(db, userPath), userData);
      alert('User registered successfully');
      // Clear input fields after successful registration
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register user');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <TextInput
          placeholder='Name'
          style={styles.input}
          placeholderTextColor="#FFF"
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
        <TextInput
          placeholder='Confirm Password'
          style={styles.input}
          placeholderTextColor="#FFF"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <RegisterButton onPress={registerData} />
        <LoginButton handlePress={() => router.push('/login')}/>

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

});

export default Register;
