import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './src/contexts/UserContext';
import UserHandler from './src/handlers/UserHandler';
import NavigationFooter from './src/navigation/NavigationFooter';
import "react-native-url-polyfill/auto"
import * as Google from 'expo-auth-session/providers/google';
import axios from 'axios';
import CustomButton from './src/components/atoms/CustomButton';
const userHandler = new UserHandler();

export default function App() {

  const [user, setUser] = useState(null);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "552993921134-4lfc1ep9u4c3ud0h73tqtrhte75ldbtn.apps.googleusercontent.com",
    androidClientId: '552993921134-tj76atrjgaav85pfoovenbgadoi5bnfa.apps.googleusercontent.com',
    selectAccount: true,
    // iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  useEffect(() => {
    (async () => {

      const storedUser = JSON.parse(await AsyncStorage.getItem('user'));
      if (storedUser) {
        storedUser.logout = async () => { setUser(null); await AsyncStorage.removeItem('user'); setIsLoggedOut(true) }
        setUser(storedUser);
      }
    })()
  }, []);

  const styles = {
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  if (!user && !isLoggedOut) {
    if (response?.type === 'success') {
      (async () => {
        const userData = await axios.get(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${response.params.access_token}` },
          }
        ).then(res => res.data);

        const backendUser = await axios.post(`${process.env.BACKEND_URL}/login`, userData).then(res => res.data);

        if (backendUser) {
          await AsyncStorage.setItem('user', JSON.stringify(backendUser));
          backendUser.logout = async () => { setUser(null); await AsyncStorage.removeItem('user'); setIsLoggedOut(true) }
          setUser(backendUser);
        }
      })();
    }
  }

  return (user ? (
    <UserContext.Provider value={user}>
      <NavigationFooter />
    </UserContext.Provider>) : (<View style={styles.loader}>
      <CustomButton onPress={() => { promptAsync(); setIsLoggedOut(false) }} text="Login with Google" />
    </View>)
  );
}