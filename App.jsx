import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './src/contexts/UserContext';
import UserHandler from './src/handlers/UserHandler';
import NavigationFooter from './src/navigation/NavigationFooter';
import "react-native-url-polyfill/auto"
import * as Google from 'expo-auth-session/providers/google';
import axios from 'axios';
const userHandler = new UserHandler();

export default function App() {
  const [user, setUser] = useState(null);
//   // WebBrowser.maybeCompleteAuthSession();
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "552993921134-4lfc1ep9u4c3ud0h73tqtrhte75ldbtn.apps.googleusercontent.com",
    androidClientId: '552993921134-tj76atrjgaav85pfoovenbgadoi5bnfa.apps.googleusercontent.com',
    selectAccount: true,
    // iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });
  if (response?.type === 'success') {
    (async () => {
      const userData = await axios.get(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${response.params.access_token}` },
        }
      );

      console.log('user info:', userData)
    })();
  }
  useEffect(() => {
    const getUser = async () => {
      let storedUser = await AsyncStorage.getItem('user');
      if (!storedUser) {
        const users = await userHandler.getAllUsersPromise();
        const currentUser = users[0];
        storedUser = currentUser.id;
        await AsyncStorage.setItem('user', storedUser);
        setUser(currentUser);
      } else {
        const currentUser = await userHandler.getUserByIdPromise(storedUser);
        setUser(currentUser);
      }
    };

    getUser();
  }, []);

  const styles = {
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  if (!user) {
    return (
      <View style={styles.loader}>
        {/* <Text>Anything inside this view will show up while loading thre page </Text>*/}
        <ActivityIndicator size="large" color="#b82d1b" />
      </View>
    );
  }

  return (
    <UserContext.Provider value={user}>
      <NavigationFooter />
    </UserContext.Provider>
  );
}