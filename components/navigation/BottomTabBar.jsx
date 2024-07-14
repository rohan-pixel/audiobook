// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { router } from 'expo-router'

// const BottomTabBar = () => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => router.push('(tabs)/home')} style={styles.touch}>
//         <Text style={styles.text}>Home</Text>
//             <Image source={require('../../assets/icons/home.png')} style={styles.image} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => router.push('search/query')}>
//             <Image source={require('../../assets/icons/search.png')} style={styles.image} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => router.push('(tabs)/library')}>
//             <Image source={require('../../assets/icons/bookmark.png')} style={styles.image} />
//           </TouchableOpacity>

//     </View>
//   )
// }

// export default BottomTabBar


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//     marginTop: 70,
//     paddingLeft: 12,
//   },

//   image:{
//     height: 22,
//     width: 22,
//   },

//   text:{

//   }
// });





import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const BottomTabBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('(tabs)/home')}>
        <Image source={require('../../assets/icons/home.png')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('search/query')}>
        <Image source={require('../../assets/icons/search.png')} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('(tabs)/library')}>
        <Image source={require('../../assets/icons/bookmark.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  image: {
    height: 22,
    width: 22,
  },
});
