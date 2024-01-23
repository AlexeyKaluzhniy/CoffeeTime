import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RootStack } from './src/navigation/RootStackNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    'lobsterRegular': require('./assets/fonts/Lobster-Regular.ttf'),
    'SFUIBold': require('./assets/fonts/SF-UI-Text-Bold.otf'),
    'SFUILight': require('./assets/fonts/SF-UI-Text-Light.otf'),
    'SFUIMedium': require('./assets/fonts/SF-UI-Text-Medium.otf'),
    'SFUIRegular': require('./assets/fonts/SF-UI-Text-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) return null;

  return (
    <Provider store={store}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <StatusBar />
          <RootStack />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});