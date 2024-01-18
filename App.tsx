import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';
import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RootStack from "./src/navigation/rootStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

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
    backgroundColor: '#EAEAEA'
  },
});