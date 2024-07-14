// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { db } from '../../utils/firebaseConfig';
// import { ref, query, orderByChild, limitToLast, onValue } from 'firebase/database';
// import BottomTabBar from '../../components/navigation/BottomTabBar';
// import { useNavigation } from '@react-navigation/native';

// const library = () => {
//   const [books, setBooks] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchBooks = () => {
//       const booksRef = query(ref(db, 'books'), orderByChild('uploadDate'), limitToLast(10));

//       onValue(booksRef, (snapshot) => {
//         const bookData = snapshot.val();
//         if (bookData) {
//           const booksArray = Object.entries(bookData).map(([key, value]) => ({
//             id: key,
//             title: value.title,
//             description: value.description,
//             audioURL: value.audio,
//             imageURL: value.image,
//             uploadDate: value.uploadDate,
//           }));
//           setBooks(booksArray.reverse()); // Reverse to show the most recent books first
//         }
//       });
//     };

//     fetchBooks();
//   }, []);

//   const handleBookPress = (book) => {
//     navigation.navigate('bookdata', { book });
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => handleBookPress(item)} style={styles.bookItem}>
//       <Image source={{ uri: item.imageURL }} style={styles.bookImage} />
//       <View style={styles.bookDetails}>
//         <Text style={styles.bookTitle}>{item.title}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <View style={styles.header}>
//           <Text style={styles.headerText}>Library</Text>
//         </View>
//         <FlatList
//           data={books}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//           style={styles.booksList}
//         />
//       </View>
//       <BottomTabBar />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#010136',
//   },
//   content: {
//     padding: 20,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     padding: 20,
//   },
//   welcomeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   booksList: {
//     marginTop: 20,
//   },
//   bookItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     backgroundColor: '#00004a',
//     borderRadius: 10,
//     padding: 10,
//   },
//   bookImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 5,
//   },
//   bookDetails: {
//     marginLeft: 20,
//     flex: 1,
//   },
//   bookTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   bottombar: {
//     paddingTop: 90,
//     paddingRight: 20,
//     paddingLeft: 20,
//     display: 'flex',
//     justifyContent: 'flex-end',
//   },
// });

// export default library;






import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../../utils/firebaseConfig';
import { ref, query, orderByChild, limitToLast, onValue } from 'firebase/database';
import BottomTabBar from '../../components/navigation/BottomTabBar';
import { useNavigation } from '@react-navigation/native';

const library = () => {
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
    <TouchableOpacity onPress={() => handleBookPress(item)} style={styles.bookItem}>
      <Image source={{ uri: item.imageURL }} style={styles.bookImage} />
      <View style={styles.bookDetails}>
        <Text style={styles.bookTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Library</Text>
        </View>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.booksList}
        />
      </View>
      <BottomTabBar />
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
    flex: 1, // Add this to ensure content takes available space
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    padding: 20,
  },
  booksList: {
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
  bookDetails: {
    marginLeft: 20,
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default library;
