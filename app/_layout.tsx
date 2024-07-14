// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//     OpenSansRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
//     OpenSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="index" options={{ headerShown: false }} />
//         <Stack.Screen name="onboarding2" options={{ headerShown: false }} />
//         <Stack.Screen name="onboarding3" options={{ headerShown: false }} />
//         <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//         <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
//         <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
//         <Stack.Screen name="(auth)/forgotpassword" options={{ headerShown: false }} />
//         <Stack.Screen name="(tabs)/admin" options={{ headerShown: false }} />
//         <Stack.Screen name="(tabs)/home" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//     </ThemeProvider>
//   );
// }
