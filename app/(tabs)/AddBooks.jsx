// STORES COMPLETE DATA

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Button, Alert } from 'react-native';
import { db } from '../../utils/firebaseConfig'; // Adjust the import path as necessary
import { ref, push } from 'firebase/database'; // Correct import for push function

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState(''); // State to hold image URL
  const [audioURL, setAudioURL] = useState(''); // State to hold audio URL

  // Function to add book data to Firebase Realtime Database
  const addBook = () => {
    if (!title || !description || !imageURL || !audioURL) {
      Alert.alert('Please fill all fields');
      return;
    }

    const bookData = {
      title: title,
      description: description,
      image: imageURL, // Store image URL
      audio: audioURL, // Store audio URL
      // Add other fields as needed
    };

    try {
      // Generate a unique key for the new book entry
      const newBookRef = push(ref(db, 'books'), bookData); // Use push() to generate a new key and set data

      Alert.alert('Book added successfully');
      // Clear input fields after successful addition
      setTitle('');
      setDescription('');
      setImageURL('');
      setAudioURL('');
    } catch (error) {
      console.error('Error adding book:', error);
      Alert.alert('Failed to add book');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <TextInput
          placeholder='Book Title'
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)} // Update state with text directly
        />
        <TextInput
          placeholder='Book Description'
          style={styles.input}
          value={description}
          onChangeText={(text) => setDescription(text)} // Update state with text directly
        />
        <TextInput
          placeholder='Image URL'
          style={styles.input}
          value={imageURL}
          onChangeText={(text) => setImageURL(text)} // Update state with text directly
        />
        <TextInput
          placeholder='Audio URL'
          style={styles.input}
          value={audioURL}
          onChangeText={(text) => setAudioURL(text)} // Update state with text directly
        />
        <Button title='Add Book' onPress={addBook} />
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

export default AddBooks;
