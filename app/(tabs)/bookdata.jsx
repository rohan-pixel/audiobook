// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { Audio } from 'expo-av'; // Import Audio from expo-av for audio playback

// const BookData = () => {
//   const [sound, setSound] = useState(null); // State to hold the currently playing sound
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { book } = route.params;

//   const playAudio = async (audioURL) => {
//     try {
//       if (sound) {
//         // If sound is already playing, pause it
//         await sound.pauseAsync();
//         setSound(null); // Reset the sound state
//         return;
//       }

//       const { sound: audioSound } = await Audio.Sound.createAsync({ uri: audioURL });
//       setSound(audioSound); // Set the sound object in state

//       // Play the audio
//       await audioSound.playAsync();
//     } catch (error) {
//       console.error('Failed to play audio:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.bookContainer}>
//         <Image source={{ uri: book.imageURL }} style={styles.image} />
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>{book.title}</Text>
//           <Text style={styles.description}>{book.description}</Text>
//           <TouchableOpacity onPress={() => playAudio(book.audioURL)} style={styles.playButtonContainer}>
//             <Image
//               source={sound ? require('../../assets/icons/pause.png') : require('../../assets/icons/play.png')}
//               style={styles.playButton}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#010136',
//     paddingHorizontal: 20,
//   },
//   bookContainer: {
//     marginVertical: 10,
//     padding: 10,
//     backgroundColor: '#00004a',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//     alignItems: 'center',
//   },
//   image: {
//     width: 300,
//     height: 300,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   textContainer: {
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#fff',
//   },
//   description: {
//     fontSize: 16,
//     color: '#fff',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   playButtonContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   playButton: {
//     width: 32,
//     height: 32,
//   },
// });

// export default BookData;



import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Audio } from 'expo-av'; // Import Audio from expo-av for audio playback

const BookData = () => {
  const [sound, setSound] = useState(null); // State to hold the currently playing sound
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the audio is playing
  const navigation = useNavigation();
  const route = useRoute();
  const { book } = route.params;

  useEffect(() => {
    return () => {
      // Unload the sound if the component unmounts
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playAudio = async (audioURL) => {
    try {
      if (sound) {
        await sound.unloadAsync(); // Unload the previous sound
        setSound(null);
        setIsPlaying(false);
      }

      const { sound: newSound } = await Audio.Sound.createAsync({ uri: audioURL });
      setSound(newSound);
      setIsPlaying(true);

      // Play the audio
      await newSound.playAsync();
    } catch (error) {
      console.error('Failed to play audio:', error);
    }
  };

  const toggleAudio = async (audioURL) => {
    if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      playAudio(audioURL);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        <Image source={{ uri: book.imageURL }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.description}>{book.description}</Text>
          <TouchableOpacity onPress={() => toggleAudio(book.audioURL)} style={styles.playButtonContainer}>
            <Image
              source={isPlaying ? require('../../assets/icons/pause.png') : require('../../assets/icons/play.png')}
              style={styles.playButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010136',
    paddingHorizontal: 20,
  },
  bookContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#00004a',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  playButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  playButton: {
    width: 32,
    height: 32,
  },
});

export default BookData;
