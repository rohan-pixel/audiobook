import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../../utils/firebaseConfig';
import { ref, query, orderByChild, limitToLast, onValue } from 'firebase/database';
import BottomTabBar from '../../components/navigation/BottomTabBar';
import { useNavigation } from '@react-navigation/native';

const home = () => {
  const [books, setBooks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBooks = () => {
      const booksRef = query(ref(db, 'books'), orderByChild('uploadDate'), limitToLast(10));

      onValue(booksRef, (snapshot) => {
        const bookData = snapshot.val();
        if (bookData) {
          const booksArray = Object.entries(bookData).map(([key, value]) => ({
            id: key,
            title: value.title,
            description: value.description,
            audioURL: value.audio,
            imageURL: value.image,
            uploadDate: value.uploadDate,
          }));
          setBooks(booksArray.reverse()); // Reverse to show the most recent books first
        }
      });
    };

    fetchBooks();
  }, []);

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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome !</Text>
        <View style={styles.header}>
        <Text style={styles.headerText}>Recently Added</Text>
        </View>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.booksList}
        />
      </View>
      <View style={styles.bottombar}>
        <BottomTabBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010136',
  },
  content: {
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    padding: 20,
  },

  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  booksList: {
    marginTop: 20,
  },
  bookItem: {
    marginRight: 10,
    alignItems: 'center',
    padding: 20,
  },
  bookImage: {
    width: 200,
    height: 460,
    borderRadius: 5,
  },
  bookTitle: {
    marginTop: 5,
    color: '#fff',
    textAlign: 'center',
  },
  bottombar: {
    paddingTop: 110,
    paddingRight: 20,
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default home;
