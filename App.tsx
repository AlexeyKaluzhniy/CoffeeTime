import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import Favorite from "./src/screens/Favorite";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function getFonts() {
      await Font.loadAsync({
        lobsterRegular: require('./assets/fonts/Lobster-Regular.ttf'),
        SFUIBold: require('./assets/fonts/SF-UI-Text-Bold.otf'),
        SFUILight: require('./assets/fonts/SF-UI-Text-Light.otf'),
        SFUIMedium: require('./assets/fonts/SF-UI-Text-Medium.otf'),
        SFUIRegular: require('./assets/fonts/SF-UI-Text-Regular.otf'),
      });
      setFontsLoaded(true);
    }
    getFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar />
      <Favorite />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});