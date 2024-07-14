import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { db } from '../../utils/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

const query = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBooks = () => {
      const booksRef = ref(db, 'books');

      onValue(booksRef, (snapshot) => {
        const bookData = snapshot.val();
        if (bookData) {
          const booksArray = Object.entries(bookData).map(([key, value]) => ({
            id: key,
            title: value.title,
            description: value.description,
            audioURL: value.audio,
            imageURL: value.image,
          }));
          setBooks(booksArray);
        }
      });
    };

    fetchBooks();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks([]);
    }
  };

  const handleBookPress = (book) => {
    navigation.navigate('bookdata', { book });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleBookPress(item)}>
      <View style={styles.bookItem}>
        <Image source={{ uri: item.imageURL }} style={styles.bookImage} />
        <Text style={styles.bookTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a book..."
        placeholderTextColor="#ffffff"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.resultsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#010136',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#fff',

  },
  resultsList: {
    marginTop: 20,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#00004a',
    borderRadius: 10,
    padding: 10,
  },
  bookImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  // bookTitle: {
  //   marginTop: 10,
  //   fontSize: 16,
  //   textAlign: 'center',
  // },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default query;
